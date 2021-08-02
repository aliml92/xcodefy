package me.usaw.devblog.service;

import me.usaw.devblog.dto.CommentDto;
import me.usaw.devblog.dto.CommentDto2;
import me.usaw.devblog.dto.PostDto;
import me.usaw.devblog.entity.Comment;
import me.usaw.devblog.entity.Post;
import org.springframework.data.domain.Page;
import org.springframework.validation.ObjectError;

import java.security.Principal;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

public interface PostService {

    void save(PostDto postDto, Post post);
    List<Post> getNonActive();
    Page<Post> retrieveByPage(int pageNo);
    PostDto getPostDto(Post post);
    Map<String,Object> getPosts(int currentPage);
    Map<String,Object> getPostsByCategory(String category, int currentPage);
    Map<String,Object> getPostsByTag(String tag, int currentPage);
    Map<String, Object> getPostBySfid(String sfid);
    void saveComment(CommentDto commentDto);
    Page<Comment> retrieveByPageComments(int pageNo);
}