package com.daw.webapp12.controller;

import com.daw.webapp12.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class UserController {

	@Autowired
	UserService userService;
	
	@RequestMapping(value = "/properties")
    public String favAdvertisements(Model model) {
	 	model.addAttribute("Favourites", userService.findExample("Angel").getMyFavourites());
        return "properties";
    }

}
