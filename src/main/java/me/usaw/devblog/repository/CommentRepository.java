package me.usaw.devblog.repository;

import me.usaw.devblog.entity.Comment;
import me.usaw.devblog.entity.Post;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {

    @Query("select c from Comment c order by c.createdDate desc")
    Page<Comment> retrieveAll(Pageable pageable);
}
