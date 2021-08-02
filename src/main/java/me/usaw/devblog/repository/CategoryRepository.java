package me.usaw.devblog.repository;

import me.usaw.devblog.entity.Category;
import me.usaw.devblog.entity.Tag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CategoryRepository extends JpaRepository<Category,Long> {
    Category findByName(String category);
    @Query("select new Category(c.name) from Category c ")
    List<Category> getCatsMXL();
}