package me.usaw.devblog.controller;

import me.usaw.devblog.dto.CommentDto;
import me.usaw.devblog.dto.CommentDto2;
import me.usaw.devblog.dto.PostDto;
import me.usaw.devblog.entity.Category;
import me.usaw.devblog.entity.Post;
import me.usaw.devblog.entity.Tag;
import me.usaw.devblog.repository.CategoryRepository;
import me.usaw.devblog.repository.PostRepository;
import me.usaw.devblog.repository.TagRepository;
import me.usaw.devblog.service.PostService;
import me.usaw.devblog.util.PostUtils;
import org.springframework.core.io.FileUrlResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.StreamUtils;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Controller
public class MainController {

    private final PostService postService;
    private final PostRepository postRepository;
    private final CategoryRepository categoryRepository;
    private final TagRepository tagRepository;

    public MainController(PostService postService,
                          PostRepository postRepository,
                          CategoryRepository categoryRepository,
                          TagRepository tagRepository) {
        this.postService = postService;
        this.postRepository = postRepository;
        this.categoryRepository = categoryRepository;
        this.tagRepository = tagRepository;
    }

    @RequestMapping(method = RequestMethod.GET, value="/robots.txt", produces = MediaType.TEXT_PLAIN_VALUE)
    @ResponseBody
    public String getRobotsTxt() {
        return "User-agent: *\nDisallow: \nSitemap: https://www.xcodefy.com/sitemap.xml";
    }

    @RequestMapping(value = "/sitemap.xml", method = RequestMethod.GET, produces = MediaType.APPLICATION_XML_VALUE)
    public ResponseEntity<byte[]> getSitemap() throws IOException{
        var sitemap = new FileUrlResource("/home/ali/upload/sitemap.xml");
        byte[] bytes = StreamUtils.copyToByteArray(sitemap.getInputStream());
        return ResponseEntity
                .ok()
                .contentType(MediaType.APPLICATION_XML)
                .body(bytes);
    }

    @GetMapping
    public String showPosts(Model model){
        return showPostsByPage(model, 1);
    }


    @GetMapping("/page/{pageNo}")
    public String showPostsByPage(Model model, @PathVariable(value = "pageNo") int currentPage){
        model.mergeAttributes(postService.getPosts(currentPage));
        return "index";
    }


    @GetMapping("/topic")
    public String getCategories(Model model){
        List<Category> categories = categoryRepository.findAll();
        model.addAttribute("categories", categories);
        return "topics";
    }


    @GetMapping("/tag")
    public String getTags(Model model){
        List<Tag> tags = tagRepository.findAll();
        model.addAttribute("tags", tags);
        return "tags";
    }


    @RequestMapping(value = "/topic/{name}")
    public String showPostsByCategory(@PathVariable("name") String category,
                                      Model model){
        return showPostsByCategoryByPage(category,1, model);
    }


    @GetMapping("/topic/{name}/page/{pageNo}")
    public String showPostsByCategoryByPage(@PathVariable("name") String category,
                                            @PathVariable(value = "pageNo") int currentPage,
                                            Model model){
        model.mergeAttributes(postService.getPostsByCategory(category,currentPage));
        return "topic";
    }


    @RequestMapping(value = "/tag/{name}")
    public String showPostsByTag(@PathVariable("name") String tag, Model model){
        return showPostsByTagByPage(tag,1, model);
    }


    @GetMapping("/tag/{name}/page/{pageNo}")
    public String showPostsByTagByPage(@PathVariable("name") String tag,
                                       @PathVariable(value = "pageNo") int currentPage,
                                       Model model){
        model.mergeAttributes(postService.getPostsByTag(tag,currentPage));
        return "tag";
    }


    @GetMapping("/{sfid:[a-zA-Z0-9-,':]+-[\\d]{6}}")
    public String getPost(@PathVariable String sfid, Model model){
        Map<String,Object> maps = postService.getPostBySfid(sfid);
        if (maps.size() > 0){
            CommentDto commentDto = new CommentDto();
            maps.put("comment", commentDto);
            model.mergeAttributes(maps);
            return "single-post";
        } else {
            model.addAttribute("postNotFound", "post not found");
            return "error";
        }
    }




    @RequestMapping(method = RequestMethod.POST, value = "/saveComment", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public ResponseEntity<?> saveComment(@RequestBody CommentDto commentDto){
        postService.saveComment(commentDto);
        return new ResponseEntity<>(null,HttpStatus.OK);
    }
    @GetMapping("/about")
    public String getAboutPage(){
        return "about";
    }


}
