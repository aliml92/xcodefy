package me.usaw.devblog.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        String myExternalFilePath = "file:/var/www/html/upload/";

        registry.addResourceHandler("/images/post/**").addResourceLocations(myExternalFilePath);

        WebMvcConfigurer.super.addResourceHandlers(registry);
    }
}
