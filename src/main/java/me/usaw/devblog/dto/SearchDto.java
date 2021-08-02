package me.usaw.devblog.dto;

import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
public class SearchDto {

    private String sfid;
    private String title;
    private String contentPart;
    private String category;

}

