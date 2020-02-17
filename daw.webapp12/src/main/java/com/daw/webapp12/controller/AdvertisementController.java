package com.daw.webapp12.controller;

import java.util.List;

import com.daw.webapp12.entity.Advertisement;
import com.daw.webapp12.service.AdvertisementService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class AdvertisementController {

	@Autowired
	private AdvertisementService advertisementService;

	@RequestMapping(value = "/properties")
    public String favoritos(Model model) {
	 	model.addAttribute("advertisements", advertisementService.findAll());
        return "properties";
    }

}