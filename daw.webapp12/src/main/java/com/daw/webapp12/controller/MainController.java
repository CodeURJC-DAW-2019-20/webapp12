package com.daw.webapp12.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.Mapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class MainController {

    @RequestMapping(value =  "/MainPage", method = RequestMethod.GET)
    public String main(Model model){
        model.addAttribute("hola","Hola Mundo");
        return "index";
    }

    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public String login(){
        return "login";
    }

    @RequestMapping(value = "/signup", method = RequestMethod.GET)
    public String signup(){
        return "signUp";
    }

    @RequestMapping(value = "/blog", method = RequestMethod.GET)
    public String blog(){
        return "blog";
    }

}
