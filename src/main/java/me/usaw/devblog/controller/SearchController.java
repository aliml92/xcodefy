package me.usaw.devblog.controller;


import me.usaw.devblog.dto.SearchDto;

import me.usaw.devblog.service.HibernateSearchService;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class SearchController {

    private final HibernateSearchService hibernateSearchService;

    public SearchController(HibernateSearchService hibernateSearchService) {
        this.hibernateSearchService = hibernateSearchService;
    }

    @RequestMapping(method = RequestMethod.GET, value = "/search", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<SearchDto> find(@RequestParam("s") String searchTerm) {
        List<SearchDto> posts = hibernateSearchService.searchPosts(searchTerm);
        return posts;
    }
}
