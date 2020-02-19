package com.daw.webapp12.controller;

import java.util.List;

import com.daw.webapp12.entity.Advertisement;
import com.daw.webapp12.service.AdvertisementService;
import com.daw.webapp12.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class AdvertisementController {

	@Autowired
	AdvertisementService advertisementService;

	@Autowired
	UserService userService;

	@RequestMapping(value = "/properties")
    public String advertisements(Model model) {
		List<Advertisement> ads = advertisementService.findAll();
		
		
	 	model.addAttribute("advertisements", advertisementService.findAll());
        return "properties";
	}

	

}