package com.daw.webapp12.controller;

import java.util.Arrays;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.daw.webapp12.entity.Users;
import com.daw.webapp12.repository.UserRepository;
import com.daw.webapp12.security.UserComponent;
import com.daw.webapp12.security.UserRepositoryAuthenticationProvider;
import com.daw.webapp12.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class UserController {

	@Autowired
	UserService userService;
	@Autowired
	UserComponent userComponent;
	@Autowired
    public UserRepositoryAuthenticationProvider userAuthProvider;
	
	@RequestMapping(value = "/properties")
    public String favAdvertisements(Model model) {
	 	model.addAttribute("Favourites", userService.findExample("Angel").getMyFavourites());
        return "properties";
    }


	@PostMapping("/deleteFromFavourites/{id}")
	//User¿?
    public String deleteFromFavourite(Model model,@PathVariable long id, Users user){
		userService.findExample("Angel").deleteFavourite(id);
		//userService.updateUser("Angel");
        model.addAttribute("Favourites", userService.findExample("Angel").getMyFavourites());
        return "properties";
	}
	@RequestMapping("/register")
	public String register(Model model) {
		return ("signUp");
	}
	@PostMapping("/signUp")
	public String signUp(Model model,@RequestParam String username, HttpServletRequest request, HttpServletResponse response,@RequestParam String email,@RequestParam String password) {
		
		Users u1= userService.findExample(username);
		if (u1== null){
			Users user = new Users();    
        	user.setName(username);
        	user.setPassword(password);
        	user.setEmail(email);
        	user.setRoles(Arrays.asList("ROLE_USER"));
			userService.addUser(user);
			try{
				authenticateUser(user.getName(),user.getPassword(),request);
				
				response.sendRedirect("index");
			}
			catch(Exception e){
				e.printStackTrace();
		}
		}
		return "index";
	}
	private void authenticateUser(String username,String password,HttpServletRequest request) {
        UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(username, password);
        request.getSession();
        authToken.setDetails(new WebAuthenticationDetails(request));
        Authentication authentication = userAuthProvider.authenticate(authToken);
        SecurityContextHolder.getContext().setAuthentication(authentication);
    }
	@GetMapping("/currentUser")
	public Users getCurrentUser() {
		return userComponent.getLoggedUser();
	}

}
