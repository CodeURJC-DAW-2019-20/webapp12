package com.daw.webapp12.controller;

import java.util.Arrays;

import com.daw.webapp12.entity.Users;
import com.daw.webapp12.security.UserComponent;
import com.daw.webapp12.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class UserController {

	@Autowired
	UserService userService;
	@Autowired
	UserComponent userComponent;
	
	@RequestMapping(value = "/properties")
    public String favAdvertisements(Model model) {
		String userName = userComponent.getLoggedUser().getName();
	 	model.addAttribute("Favourites", userService.findByName(userName).getMyFavourites());
        return "properties";
    }

	@RequestMapping("/deleteFromFavourites/{id}")
	//User¿?
    public String deleteFromFavourite(Model model,@PathVariable long id){
		String userName = userComponent.getLoggedUser().getName();
		Users user = userService.findByName(userName);
		user.deleteFavourite(id);
		userService.addUser(user);
        model.addAttribute("Favourites", user.getMyFavourites());
        return "redirect:/properties";
	}


	@RequestMapping("/register")
	public String register(Model model) {
		return "signUp";
	}

	@PostMapping("/signedUp")
	public String signUp(Model model,@RequestParam String username,@RequestParam String email,@RequestParam String password) {
		
		Users u1= userService.findByName(username);
		if (u1== null){
			Users user = new Users();    
        	user.setName(username);
        	user.setPassword(password);
        	user.setEmail(email);
        	user.setRoles(Arrays.asList("ROLE_USER"));
			userService.addUser(user);
		}
		return "index";
	}
	@GetMapping("/currentUser")
	public Users getCurrentUser() {
		return userComponent.getLoggedUser();
	}

}
