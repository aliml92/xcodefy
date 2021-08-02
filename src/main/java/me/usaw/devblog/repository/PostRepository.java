package me.usaw.devblog.repository;
import me.usaw.devblog.entity.Post;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {




    @Modifying
    @Query("update Post p set p.title = ?1, p.content = ?2, p.modifiedDate = ?3 where p.id = ?4")
    void updatePostById(String title, String content, Date modifiedDate, Long userId);

    @Query("select new Post(p.id, p.title) from Post p where p.active = false order by p.modifiedDate desc")
    List<Post> retrieveNonActive();

    @Modifying
    @Query("update Post p set p.active = ?1 where p.id = ?2")
    void publishPostById(boolean active, Long userId);


    @Query("select new Post(p.id, p.title) from Post p where p.active = true order by p.modifiedDate desc")
    Page<Post> retrieveAll(Pageable pageable);

    @Query("select new Post(p.title, p.sfid, p.contentPart, p.createdDate, p.modifiedDate, p.category) from Post p  where p.active = true order by p.modifiedDate desc")
    Page<Post> getAll(Pageable pageable);

    @Query("select new Post(p.title, p.sfid, p.contentPart, p.createdDate, p.modifiedDate, p.category) from Post p  where p.active = true and p.category.name  = :category order by p.modifiedDate desc")
    Page<Post> getAllByCategory(Pageable pageable, @Param("category") String category);


    @Query("select new Post(p.title, p.sfid, p.contentPart, p.createdDate, p.modifiedDate, p.category) from Post p, in(p.tags) as t where p.active = true and t.name  = :tag order by p.modifiedDate desc")
    Page<Post> getAllByTag(Pageable pageable, @Param("tag") String tag);

    @Query("select p from Post p  where p.active = true and p.sfid like %?1")
    Optional<Post> getPostCustom(String sfid);

    @Query("select new Post(p.id) from Post p  where p.active = true and p.sfid like %?1")
    Optional<Post> getPostForComment(String sfid);


    @Query("select new Post(p.sfid, p.modifiedDate) from Post p  where p.active = true order by p.modifiedDate desc")
    List<Optional<Post>> getPostForXML();


}
