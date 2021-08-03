package me.usaw.devblog.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class AuthController {

    @GetMapping("/YOUR_LOGIN_PATH")
    public String loginPage(){
        return "admin/login";
    }

    @GetMapping("/access-denied")
    public String forbiddenPage(){
        return "403";
    }

}


