package me.usaw.devblog.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import me.usaw.devblog.entity.Tag;
import me.usaw.devblog.error.ValidImage;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.NotBlank;
import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
public class PostDto {

    private Long id;
    private String sfid;

    @NotBlank(message = "title cannot be blank")
    private String title;

    @NotBlank(message = "post body cannot be blank")
    private String content;

    // to carry a part of post content to posts list page
    private String contentPart;

    // to carry a string of created/updated date
    private String postDate;

    @ValidImage
    private MultipartFile postImage;

    // carry img link which is its name to view
    private String imageName;

    @NotBlank
    private String category;

    @NotBlank
    private String tag;

    private List<String> tags = new ArrayList<>();

    private List<CommentDto2> comments = new ArrayList<>();

    public void addTag(String tag) {
        tags.add(tag);
    }
    public void addComment(CommentDto2 commentDto){comments.add(commentDto);}


}
