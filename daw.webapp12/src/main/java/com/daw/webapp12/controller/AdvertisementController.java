package com.daw.webapp12.controller;

import com.daw.webapp12.service.AdvertisementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class AdvertisementController {

	@Autowired
	AdvertisementService advertisementService;

	@RequestMapping(value = "/properties")
    public String advertisements(Model model) {
	 	model.addAttribute("advertisements", advertisementService.findAll());
        return "properties";
	}

}