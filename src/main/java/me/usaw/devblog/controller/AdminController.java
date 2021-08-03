package me.usaw.devblog.controller;

import me.usaw.devblog.dto.PostDto;
import me.usaw.devblog.entity.Comment;
import me.usaw.devblog.entity.Post;
import me.usaw.devblog.repository.PostRepository;
import me.usaw.devblog.service.ImgStorageService;
import me.usaw.devblog.service.PostService;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.unbescape.html.HtmlEscape;
import org.unbescape.javascript.JavaScriptEscape;


import javax.validation.Valid;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping("/YOUR_ADMIN_PATH")
public class AdminController {

    private final PostService postService;
    private final PostRepository postRepository;
    private final ImgStorageService imgStorageService;

    public AdminController(PostService postService,
                           PostRepository postRepository,
                           ImgStorageService imgStorageService) {
        this.postService = postService;
        this.postRepository = postRepository;
        this.imgStorageService = imgStorageService;
    }

    @GetMapping
    public String home(){
        return "admin/home";
    }

    @GetMapping("/draft")
    public String draft(Model model){
        List<Post> posts = postService.getNonActive();
        if (posts.size() == 0){
            posts = null;
        }
        model.addAttribute("posts", posts);
        return "admin/draft";
    }

    @GetMapping("/post/new")
    public String addPost(Model model){
        PostDto post = new PostDto();
        model.addAttribute("post", post);
        return "admin/new";
    }
    @PostMapping("/post/new")
    public String addPost(@ModelAttribute("post") @Valid PostDto postDto,
                          BindingResult bindingResult,
                          Model model,
                          RedirectAttributes redirectAttributes){
        if (bindingResult.hasErrors()){
            model.addAttribute("post", postDto);
            return "admin/new";
        }
        Post post = new Post();
        postService.save(postDto,post);
        MultipartFile postImage = postDto.getPostImage();
        imgStorageService.uploadImage(postImage);
        redirectAttributes.addFlashAttribute("message", "New post has been saved successfully");
        return "redirect:/YOUR_ADMIN_PATH";
    }

    @GetMapping("/post/{id}/preview")
    public String previewPost(@PathVariable(name = "id") Long postId, Model model){
        Post post = postRepository.findById(postId).orElseThrow(null);
        if ( post == null ){
            String msg = "Post with id: " + postId.toString() + " not found";
            model.addAttribute("postNotFound", msg);
            return "error";
        }
        PostDto postDto = postService.getPostDto(post);
        model.addAttribute("post", postDto);
        return "admin/preview";
    }

    @GetMapping("/post/{id}/edit")
    public String editPost(@PathVariable(name = "id") Long postId, Model model){
        Post post = postRepository.findById(postId).orElseThrow(null);
        if ( post == null ){
            model.addAttribute("postNotFound", "Post not found");
            return "error";
        }
        PostDto postDto = new PostDto();
        postDto.setId(postId);
        postDto.setTitle(post.getTitle());
        postDto.setContent(post.getContent());
        model.addAttribute("post", postDto);
        return "admin/edit";
    }

    @PostMapping("/post/{id}/edit")
    @Transactional
    public String saveEditedPost(@PathVariable(name = "id") Long postId,
                                 @ModelAttribute("postDto") PostDto postDto,
                                 RedirectAttributes redirectAttributes){
        String title = postDto.getTitle();
        String content = postDto.getContent();
        Date date = new Date();
        postRepository.updatePostById(title,content,date, postId);
        String msg = "Post with id: " + postId + " has been updated successfully ";
        redirectAttributes.addFlashAttribute("message", msg);
        return "redirect:/YOUR_ADMIN_PATH";
    }

    @PostMapping("/post/{id}/publish")
    @Transactional
    public String publishPost(@PathVariable(name = "id") Long postId, RedirectAttributes redirectAttributes){
        postRepository.publishPostById(true, postId);
        String msg = "Post with id: " + postId + " has been published successfully ";
        redirectAttributes.addFlashAttribute("message", msg);
        return "redirect:/YOUR_ADMIN_PATH";
    }

    @GetMapping("/post/{id}/delete")
    public String deletePostById(@PathVariable("id") Long postId,
                                 RedirectAttributes model,
                                 @RequestParam(name = "page", required = false) String page ){
        postRepository.deleteById(postId);
        model.addFlashAttribute("message","Post with id: " + postId + "has been successfully deleted");
        if (page.equals("unpublished")){
            return "redirect:/YOUR_ADMIN_PATH";
        }
        return "redirect:/YOUR_ADMIN_PATH/post/all";

    }

    @GetMapping("/post/all")
    public String showPosts(Model model){
        return showPostsByPage(model, 1);
    }

    @GetMapping("/post/all/{pageNo}")
    public String showPostsByPage(Model model, @PathVariable(value = "pageNo") int currentPage){
        Page<Post> page = postService.retrieveByPage(currentPage);
        long totalItems = page.getTotalElements();
        int totalPages = page.getTotalPages();
        List<Post> postList = page.getContent();
        if (postList.isEmpty()) {
            model.addAttribute("message", "There are no active posts yet");
            return "admin/posts";
        }
        model.addAttribute("currentPage", currentPage);
        model.addAttribute("totalPages", totalPages);
        model.addAttribute("totalItems", totalItems);
        model.addAttribute("postList", postList);
        return "admin/posts";

    }

    @GetMapping("/comments")
    public String showComments(Model model){
        return showCommentsByPage(model, 1);
    }

    @GetMapping("/comments/{pageNo}")
    public String showCommentsByPage(Model model, @PathVariable(value = "pageNo") int currentPage){
        Page<Comment> page = postService.retrieveByPageComments(currentPage);
        long totalItems = page.getTotalElements();
        int totalPages = page.getTotalPages();
        List<Comment> commentList = page.getContent();
        if (commentList.isEmpty()) {
            model.addAttribute("message", "no comments yet");
            return "admin/comments";
        }
        commentList.forEach(comment -> {
            comment.setCommentBody(JavaScriptEscape.unescapeJavaScript(HtmlEscape.unescapeHtml(comment.getCommentBody())));
        });
        model.addAttribute("currentPage", currentPage);
        model.addAttribute("totalPages", totalPages);
        model.addAttribute("totalItems", totalItems);
        model.addAttribute("commentList", commentList);
        return "admin/comments";

    }

    @PostMapping("/search")
    public String getSearch(@RequestParam(value = "id") Long id, @RequestParam(value = "sfid") String sfid,Model model){
        if (id != null){
            Optional<Post> post = postRepository.findById(id);
            model.addAttribute("post", post.get());
            return "admin/search";
        } else if(!sfid.trim().isEmpty()){
            String customID = sfid.substring(sfid.length() - 6);
            Optional<Post> post = postRepository.getPostCustom(customID);
            model.addAttribute("post", post.get());
            return "admin/search";
        }
        model.addAttribute("msg", "Enter some search term");
        return "admin/search";
    }


}
