package me.usaw.devblog.service;

import me.usaw.devblog.dto.SearchDto;

import java.util.List;

public interface HibernateSearchService {

    void initializeHibernateSearch();

    List<SearchDto> searchPosts(String searchTerm);
}
