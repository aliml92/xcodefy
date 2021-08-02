package me.usaw.devblog.service.impl;

import me.usaw.devblog.dto.CommentDto;
import me.usaw.devblog.dto.CommentDto2;
import me.usaw.devblog.dto.PostDto;
import me.usaw.devblog.dto.PrevNextDto;
import me.usaw.devblog.entity.*;
import me.usaw.devblog.repository.*;
import me.usaw.devblog.service.PostService;
import me.usaw.devblog.util.PostUtils;
import org.ocpsoft.prettytime.PrettyTime;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import org.unbescape.html.HtmlEscape;
import org.unbescape.javascript.JavaScriptEscape;


import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.security.SecureRandom;
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
@Transactional
public class PostServiceImpl implements PostService {


    @PersistenceContext
    private EntityManager entityManager;

    private final PostRepository postRepository;
    private final UserRepository userRepository;
    private final TagRepository tagRepository;
    private final CategoryRepository categoryRepository;
    private final CommentRepository commentRepository;

    public PostServiceImpl(PostRepository postRepository,
                           UserRepository userRepository,
                           TagRepository tagRepository,
                           CategoryRepository categoryRepository, CommentRepository commentRepository) {
        this.postRepository = postRepository;
        this.userRepository = userRepository;
        this.tagRepository = tagRepository;
        this.categoryRepository = categoryRepository;
        this.commentRepository = commentRepository;
    }



    @Override
    public void save(PostDto postDto, Post post) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String name = auth.getName();
        String title = postDto.getTitle();
        post.setSfid(generateSFId(title));
        post.setTitle(title);
        post.setContent(postDto.getContent());
        post.setContentPart(postDto.getContentPart());
        MultipartFile image = postDto.getPostImage();
        post.setImageName(image.getOriginalFilename());
        Optional<User> user1 = userRepository.findByEmail(name);
        if (user1.isPresent()){
            User user = user1.get();
            post.setUser(user);
            Category category1 = categoryRepository.findByName(postDto.getCategory());
            if (category1 == null){
                Category category = new Category();
                category.setName(postDto.getCategory());
                post.setCategory(category);
            } else {
                post.setCategory(category1);
            }
            List<String> items = split(postDto.getTag());
            for (String item : items) {
                Tag tag1 = tagRepository.findByName(item);
                if (tag1 != null){
                    post.addTag(tag1);
                } else {
                    Tag tag2 = new Tag(item);
                    post.addTag(tag2);
                }
            }
            postRepository.save(post);
        }
    }


    @Override
    public List<Post> getNonActive() {
        return postRepository.retrieveNonActive();
    }

    @Override
    public Page<Post> retrieveByPage(int pageNo) {
        Pageable pageable = PageRequest.of(pageNo - 1 , 5 );
        return postRepository.retrieveAll(pageable);
    }


    @Override
    public PostDto getPostDto(Post post) {
        PostDto postDto = new PostDto();
        postDto.setId(post.getId());
        postDto.setTitle(post.getTitle());
        postDto.setImageName(post.getImageName());
        postDto.setPostDate(PostUtils.postDateFormat(post.getCreatedDate(),post.getModifiedDate()));
        postDto.setContent(post.getContent());
        return postDto;
    }

    @Override
    public Map<String, Object> getPosts(int currentPage) {
        Pageable pageable = PageRequest.of(currentPage - 1 , 5 );
        Page<Post> posts = postRepository.getAll(pageable);
        Map<String, Object> map = postsMapper(posts,currentPage);
        return map;
    }

    @Override
    public Map<String, Object> getPostsByCategory(String category, int currentPage) {
        Pageable pageable = PageRequest.of(currentPage - 1 , 5 );
        Page<Post> postsByCategory = postRepository.getAllByCategory(pageable, category);
        Map<String, Object> map = postsMapper(postsByCategory,currentPage);
        map.put("category", category);
        return map;
    }

    @Override
    public Map<String, Object> getPostsByTag(String tag, int currentPage) {
        Pageable pageable = PageRequest.of(currentPage - 1 , 5 );
        Page<Post> postsByTag = postRepository.getAllByTag(pageable, tag);
        Map<String, Object> map = postsMapper(postsByTag,currentPage);
        map.put("tag", tag);
        return map;
    }

    @Override
    public Map<String, Object> getPostBySfid(String sfid) {
        String customID = sfid.substring(sfid.length() - 6);
        Map<String, Object> map = new HashMap<>();
        Optional<Post> post = postRepository.getPostCustom(customID);
        if (post.isPresent()){
            Post p = post.get();
            PostDto postDto = new PostDto();
            postDto.setTitle(p.getTitle());
            postDto.setImageName(p.getImageName());
            postDto.setContentPart(p.getContentPart());
            postDto.setContent(p.getContent());
            postDto.setPostDate(PostUtils.postDateFormat(p.getCreatedDate(),p.getModifiedDate()));
            postDto.setCategory(p.getCategory().getName());
            p.getTags().forEach((i) -> postDto.addTag(i.getName()));
            p.getComments().forEach((i) -> {
                CommentDto2 commentDto2 = new CommentDto2();
                PrettyTime prettyTime = new PrettyTime();
                commentDto2.setCreatedBy(i.getCreatedBy());
                commentDto2.setCreatedDate(prettyTime.format(i.getCreatedDate()));
                String unescaped = JavaScriptEscape.unescapeJavaScript(HtmlEscape.unescapeHtml(i.getCommentBody()));
                commentDto2.setCommentBody(unescaped);
                postDto.addComment(commentDto2);
            });
            map.put("post", postDto);
            Long id = p.getId();
            if (id >= 2){
                Optional<Post> prev = postRepository.findById(id+1);
                if (prev.isPresent() && prev.get().isActive()){
                    PrevNextDto prevDto = new PrevNextDto(prev.get().getSfid(), prev.get().getTitle());
                    map.put("prev", prevDto);
                }
                Optional<Post> next = postRepository.findById(id-1);
                if (next.isPresent() && next.get().isActive()){
                    PrevNextDto nextDto = new PrevNextDto(next.get().getSfid(), next.get().getTitle());
                    map.put("next", nextDto);
                }
            }
        }
        return map;
    }

    @Override
    public void saveComment(CommentDto commentDto) {
        String postSfid = commentDto.getSfid();
        String customId = postSfid.substring(postSfid.length() - 6);
        Optional<Post> post = postRepository.getPostForComment(customId);
        Comment comment = new Comment();
        comment.setPost(post.get());
        String stripped = commentDto.getCommentBody().replaceAll("<p><br></p>","");
        String escaped = HtmlEscape.escapeHtml5(JavaScriptEscape.escapeJavaScript(stripped));
        comment.setCommentBody(escaped);
        comment.setCreatedBy(commentDto.getName());
        commentRepository.save(comment);
    }

    @Override
    public Page<Comment> retrieveByPageComments(int pageNo) {
        Pageable pageable = PageRequest.of(pageNo - 1 , 5 );
        return commentRepository.retrieveAll(pageable);
    }


    // util methods

    public Map<String,Object> postsMapper(Page<Post> posts, int currentPage){
        int totalPages = posts.getTotalPages();
        List<PostDto> postDtos = new ArrayList<>();
        for (Post p: posts) {
            PostDto postDto = new PostDto();
            postDto.setTitle(p.getTitle());
            // content processing
            postDto.setContentPart(p.getContentPart());
            postDto.setSfid(p.getSfid());
            postDto.setPostDate(PostUtils.postDateFormat(p.getCreatedDate(),p.getModifiedDate()));
            postDto.setCategory(p.getCategory().getName());
            postDtos.add(postDto);
        }
        Map<String,Object> map = new HashMap<>();
        map.put("currentPage", currentPage);
        map.put("totalPages", totalPages);
        map.put("postList", postDtos);
        return map;
    }

    public List<String> split(String str){
        return Stream.of(str.trim().split("\\s*,\\s*"))
                .map (String::new)
                .collect(Collectors.toList());
    }

    public String generateSFId(String title){
        Pattern pattern = Pattern.compile("\\s+");
        Matcher matcher = pattern.matcher(title);
        String result = matcher.replaceAll("-").replaceAll(":","").toLowerCase().concat("-");
        return result.concat(generateRandomString(6));
    }

    public String generateRandomString(int length){
        String DATA_FOR_RANDOM_STRING = "0123456789";
        SecureRandom random = new SecureRandom();
        if (length < 1) throw new IllegalArgumentException();
        StringBuilder sb = new StringBuilder(length);
        for (int i = 0; i < length; i++){
            int rndCharAt = random.nextInt(DATA_FOR_RANDOM_STRING.length());
            char rndChar = DATA_FOR_RANDOM_STRING.charAt(rndCharAt);
            sb.append(rndChar);
        }
        return sb.toString();
    }



}
