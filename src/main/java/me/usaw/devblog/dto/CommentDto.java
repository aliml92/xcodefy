package me.usaw.devblog.dto;

import lombok.Data;

@Data
public class CommentDto {

    private String name;
    private String email;
    private String commentBody;
    private String sfid;

}
