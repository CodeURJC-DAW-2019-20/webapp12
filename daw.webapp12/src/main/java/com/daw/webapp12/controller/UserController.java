package com.daw.webapp12.controller;

import java.util.Arrays;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.daw.webapp12.entity.Advertisement;
import com.daw.webapp12.entity.Users;
import com.daw.webapp12.repository.AdvertisementRepository;
import com.daw.webapp12.security.UserComponent;
import com.daw.webapp12.security.UserRepositoryAuthenticationProvider;
import com.daw.webapp12.service.AdvertisementService;
import com.daw.webapp12.service.UserService;
import com.daw.webapp12.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;




@Controller
public class UserController {

	@Autowired
	UserService userService;
	@Autowired
	UserComponent userComponent;
	@Autowired
	public UserRepositoryAuthenticationProvider userAuthProvider;
	
	@Autowired
	AdvertisementService advertisementService;
	@Autowired
	AdvertisementRepository advertisementRepository;

	@RequestMapping(value = "/properties")
    public String favAdvertisements(Model model, Pageable page) {
		Pageable firstPageWithThreeElements = PageRequest.of(0,3);

		Page<Advertisement> pages =advertisementRepository.findAll(firstPageWithThreeElements);



		if(userComponent.isLoggedUser()){
			String userName = userComponent.getLoggedUser().getName();
			Users user = userService.findByName(userName);
			if(user.getMyFavourites().size()>0){
				model.addAttribute("Favourites", pages);
				model.addAttribute("showNext",!pages.isLast());
				model.addAttribute("showPrev",!pages.isFirst());
				model.addAttribute("nextPage", pages.getNumber()+1);
				model.addAttribute("prevPage", pages.getNumber()-1);
				//model.addAttribute("Favourites", user.getMyFavourites());
			}else{
				model.addAttribute("Error", "No tienes anuncios favoritos.");
			}
			return "properties";
		}else{
			return "login";
		}
		
    }

	@RequestMapping("/deleteFromFavourites/{id}")
    public String deleteFromFavourite(Model model,@PathVariable long id){
		String userName = userComponent.getLoggedUser().getName();
		Users user = userService.findByName(userName);
		user.deleteFavourite(id);
		userService.addUser(user);
        // model.addAttribute("Favourites", user.getMyFavourites());
        return "redirect:/properties";
	}
	@RequestMapping("/addFavourite/{id}")
    public String addFavourite(Model model,@PathVariable long id){
		if(userComponent.isLoggedUser()){
			String userName = userComponent.getLoggedUser().getName();
			Users user = userService.findByName(userName);
			Advertisement adv = advertisementService.findById(id);
			if(user.getMyFavourites().contains(adv)){
				return "redirect:/properties";
			}else{
				user.addFavourite(adv);
				userService.addUser(user);
			}
			return "redirect:/properties";
		}else{
			return "redirect:/login";
		}
        
	}

	@RequestMapping("/deleteMyAdvertisement/{id}")
    public String deleteFromMyAdvertisements(Model model,@PathVariable long id){
		String userName = userComponent.getLoggedUser().getName();
		Users user = userService.findByName(userName);
		user.deleteOneAdvertisement(id);
		userService.addUser(user);
		advertisementService.deleteAdvertisement(id);
        return "redirect:/properties-modificar";
	}


	@GetMapping("/register")
	public String register(Model model) {
		return ("signUp");
	}

	@PostMapping("/signUp")
	public String signUp(Model model,@RequestParam String username, HttpServletRequest request, HttpServletResponse response,@RequestParam String email,@RequestParam String password) throws Exception{
		String pass = password;
		Users u1= userService.findByName(username);
		Users user = new Users(username, email, password, "ROLE_USER");
		if (u1== null){
			userService.addUser(user);
			userService.sendEmail(user, pass);
		}
		return "index";
	}
	@GetMapping("/currentUser")
	public Users getCurrentUser() {
		return userComponent.getLoggedUser();
	}

	/*@PostMapping("/register")
	public String addNewUser(Model model, HttpServletRequest req, @RequestParam String name,
							 @RequestParam String email, @RequestParam String password) throws Exception {
		Users newUser = new Users(name, password, "ROLE_USER");
		boolean exists = false;
		if(this.userService.findByName(newUser.getName())!=null){
			exists = true;
			model.addAttribute("exists", exists);
			return "/register";
		}
		newUser.setEmail(email);
		userService.addUser(newUser);
		userService.sendEmail(newUser);
		return "/login";
	}*/

	@ModelAttribute
    public void addUserToModel(Model model){
        boolean logged = userComponent.getLoggedUser() != null;
        model.addAttribute("logged", logged);
        if(logged){
            model.addAttribute("admin",userComponent.getLoggedUser().getRoles().contains("ROLE_ADMIN"));
            model.addAttribute("user",userComponent.getLoggedUser().getRoles().contains("ROLE_USER"));
           //model.addAttribute("logged", logged);
        }
    }

}
