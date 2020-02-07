package com.daw.webapp12.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.Mapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomePage {

    @RequestMapping(path =  "/")
    public String main(){
        return "index";
    }

    @RequestMapping(path = "/login")
    public String login(){
        return "Login";
    }

}
