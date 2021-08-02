package me.usaw.devblog.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class AuthController {

    @GetMapping("/app/login")
    public String loginPage(){
        return "admin/login";
    }

    @GetMapping("/access-denied")
    public String forbiddenPage(){
        return "403";
    }

}


