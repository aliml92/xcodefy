package me.usaw.devblog.service.impl;

import me.usaw.devblog.dto.PostDto;
import me.usaw.devblog.dto.SearchDto;
import me.usaw.devblog.entity.Post;
import me.usaw.devblog.service.HibernateSearchService;
import org.apache.lucene.analysis.standard.StandardAnalyzer;
import org.hibernate.search.engine.search.query.SearchResult;
import org.hibernate.search.mapper.orm.Search;
import org.hibernate.search.mapper.orm.massindexing.MassIndexer;
import org.hibernate.search.mapper.orm.session.SearchSession;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.ArrayList;
import java.util.List;


@Service
public class HibernateSearchServiceImpl implements HibernateSearchService {


    private final EntityManager entityManager;

    public HibernateSearchServiceImpl(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Transactional
    public void initializeHibernateSearch(){
        try {
            SearchSession searchSession = Search.session( entityManager );
            MassIndexer indexer = searchSession.massIndexer( Post.class );
            indexer.startAndWait();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    @Override
    @Transactional(readOnly = true)
    public List<SearchDto> searchPosts(String searchTerm) {
        SearchSession searchSession = Search.session( entityManager );

        SearchResult<Post> result = searchSession.search( Post.class )
                .where( f -> f.match()
                        .fields( "title", "content", "tags.name" )
                        .matching( searchTerm ) )
                .fetch( 10 );
        List<SearchDto> postDtos = new ArrayList<>();
        result.hits().forEach(post -> {
            SearchDto postDto = new SearchDto();
            if (post.isActive()){
                postDto.setTitle(post.getTitle());
                postDto.setSfid(post.getSfid());
                postDto.setContentPart(post.getContentPart());
                postDto.setCategory(post.getCategory().getName());
            }
            postDtos.add(postDto);
        });
        return postDtos;
    }
}
