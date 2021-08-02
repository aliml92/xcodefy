package me.usaw.devblog.service;

import org.springframework.web.multipart.MultipartFile;

public interface ImgStorageService {
    void uploadImage(MultipartFile file);
}
