package com.daw.webapp12.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.security.Principal;

@Controller
public class MainController {


    @RequestMapping(value = "/signUp", method = RequestMethod.GET)
    public String signup(){
        return "signUp";
    }

    @RequestMapping(value = "/properties-modificar", method = RequestMethod.GET)
    public String misAnuncios(){
        return "properties-modificar";
    }

    @RequestMapping(value = "/property-upload", method = RequestMethod.GET)
    public String ponerAnuncios() {
        return "property-upload";
    }
}
