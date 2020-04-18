package com.daw.webapp12.controller;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.*;

import com.daw.webapp12.entity.Advertisement;
import com.daw.webapp12.entity.Search;
import com.daw.webapp12.entity.Users;
import com.daw.webapp12.repository.AdvertisementRepository;
import com.daw.webapp12.security.UserComponent;
import com.daw.webapp12.service.AdvertisementService;
import com.daw.webapp12.service.SearchService;
import com.daw.webapp12.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

@Controller
public class AdvertisementController{

	@Autowired
	AdvertisementService advertisementService;
	@Autowired
    AdvertisementRepository  advertisementRepository;
	@Autowired
	UserService userService;
	@Autowired
	SearchService searchService;
	@Autowired
	UserComponent userComponent;

	@RequestMapping(value = {"/MainPage", ""})
    public String recommendeds(Model model) {
		List<Advertisement> recommendeds = new ArrayList<Advertisement>();
		advertisementService.recommendeds(recommendeds);
		List list = advertisementService.graphValues();
	   	model.addAttribute("graphValues", list);
		model.addAttribute("recommendedAds", recommendeds);
		//  if(userComponent.isLoggedUser()){
		// 	model.addAttribute("role", userComponent.getLoggedUser().getRoles().get(0));
		//  }
		 
        return "index";
	}


	@RequestMapping(value = "/properties/{id}")
    public String favAdvertisements(Model model, @PathVariable  long id) {
	 	model.addAttribute("Property", advertisementService.findById(id));
        return "properties-single";
	}


	


	@RequestMapping(value = "/search")
	public String searchAdvertisement(Model model , @RequestParam  String location , @RequestParam int price, @RequestParam(value="searchType")  String searchType,@RequestParam(value="propertyType") String propertyType,
													@RequestParam  int squareMeters, @RequestParam(value="rooms")  int rooms, @RequestParam(value="bathrooms")  int bathrooms) {
		
		List <Advertisement> aux = new ArrayList<>();
		aux = advertisementService.searchAdvertisement(location, price, searchType, propertyType, squareMeters, rooms, bathrooms);
		if(aux.size()!=0){
			model.addAttribute("Property",aux);
		}else{
			model.addAttribute("Error", "No hay resultados.");
		}
        return "properties-search";
	}
	
	@RequestMapping("/editProperties/{id}")
    public String editProperties(Model model, @PathVariable  long id) {
		model.addAttribute("advertisement", advertisementService.findById(id));
		//advertisementRepository.save(advertisement);
        return "properties-edit";
	}
	@PostMapping("/editProperties/{id}")
    public String editProperties(Model model, Advertisement advertisement,@PathVariable  long id,@RequestParam("file") MultipartFile[] multipartFile, @RequestParam String location) {
		List<String> files = new ArrayList<>(5);
        for (int i = 0; i < multipartFile.length; i++) {
            if (!multipartFile[i].isEmpty()) {
                Path directorioRecursos = Paths.get("daw.webapp12//src//main/resources//static//images");
                String rootPath = directorioRecursos.toFile().getAbsolutePath();
                try {
                    byte[] bytes = multipartFile[i].getBytes();
                    Path rupacompleta = Paths.get(rootPath + "//" + multipartFile[i].getOriginalFilename());
                    Files.write(rupacompleta, bytes);
                    files.add(multipartFile[i].getOriginalFilename());

                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
        advertisement.setImages(files);
		advertisementRepository.save(advertisement);
        return "redirect:/properties-modificar";
	}

	@RequestMapping("/deleteAdvertisement/{id}")
    public String deleteAdvertisement(Model model, @PathVariable  long id){
		advertisementService.deleteAdvertisementByAdmin(id);
        model.addAttribute("allProperties",advertisementService.findAll());
        return "redirect:/AllProperties";
    }

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
	
	@RequestMapping(value = "/AllProperties")
    public String allProperties(Model model) {
		if(userComponent.isLoggedUser() && userComponent.getLoggedUser().getRoles().contains("ROLE_ADMIN")){
			if(advertisementService.findAll().size()>0){
				model.addAttribute("allProperties", advertisementService.findAll());
			}else{
				model.addAttribute("Error", "No hay anuncios .");
			}
			return "properties-all";
		}else{
			return "login";
		}	
    }
	
}