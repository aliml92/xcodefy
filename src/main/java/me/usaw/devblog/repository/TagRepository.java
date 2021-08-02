package me.usaw.devblog.repository;

import me.usaw.devblog.entity.Post;
import me.usaw.devblog.entity.Tag;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TagRepository  extends JpaRepository<Tag,Long> {
    Tag findByName(String name);
    @Query("select new Tag (t.name) from Tag t ")
    List<Tag> getTagsMXL();
}
