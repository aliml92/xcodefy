package me.usaw.devblog.error;

import org.springframework.web.multipart.MultipartFile;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class ImageFileValidator implements ConstraintValidator<ValidImage, MultipartFile> {

    @Override
    public void initialize(ValidImage constraintAnnotation) {

    }

    @Override
    public boolean isValid(MultipartFile multipartFile, ConstraintValidatorContext context) {

        boolean result = true;


        if (multipartFile.isEmpty()){
            context.disableDefaultConstraintViolation();
            context.buildConstraintViolationWithTemplate(
                    "Image is required with max size of 3MB!")
                    .addConstraintViolation();

            result = false;
        }else if( multipartFile.getSize() > 3145728){
            context.disableDefaultConstraintViolation();
            context.buildConstraintViolationWithTemplate(
                    "Image must not exceed the size of 3MB!")
                    .addConstraintViolation();

            result = false;
        } else {
            String contentType = multipartFile.getContentType();
            if (!isSupportedContentType(contentType)) {
                context.disableDefaultConstraintViolation();
                context.buildConstraintViolationWithTemplate(
                        "Only PNG or JPG images are allowed.")
                        .addConstraintViolation();

                result = false;
            }
        }


        return result;
    }

    private boolean isSupportedContentType(String contentType) {
        return contentType.equals("image/png")
                || contentType.equals("image/jpg")
                || contentType.equals("image/jpeg");
    }
}