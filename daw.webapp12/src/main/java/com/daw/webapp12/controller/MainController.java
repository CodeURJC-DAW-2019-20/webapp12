package com.daw.webapp12.controller;

import com.daw.webapp12.entity.Advertisement;
import com.daw.webapp12.repository.AdvertisementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.security.Principal;

@Controller
public class MainController {

    @Autowired
    AdvertisementRepository  advertisementRepository;

    @RequestMapping(value = "/signUp", method = RequestMethod.GET)
    public String signup(){
        return "signUp";
    }

    @RequestMapping(value = "/properties-modificar", method = RequestMethod.POST)
    public String misAnuncios(Advertisement advertisement, Model model/*,@RequestParam ("file") MultipartFile multipartFile*/){
        model.addAttribute("misAnuncios", "SUBIR ANUNCIOS");
        advertisementRepository.save(advertisement);
        return "properties-modificar";
    }

    @RequestMapping(value = "/property-upload", method = RequestMethod.GET)
    public String ponerAnuncios() {
        return "property-upload";
    }

}
