package com.daw.webapp12.controller;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;

import com.daw.webapp12.entity.Advertisement;
import com.daw.webapp12.entity.Search;
import com.daw.webapp12.service.AdvertisementService;
import com.daw.webapp12.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class AdvertisementController {

	@Autowired
	AdvertisementService advertisementService;

	@Autowired
	UserService userService;

	@RequestMapping(value = "/MainPage")
    public String recommendeds(Model model) {
		List<Advertisement> ads = advertisementService.findAll();
		List<Search> searches = userService.findExample("Angel").getMySearches();
		HashMap<Integer,Integer> scores = new HashMap<Integer,Integer>();
		List<Advertisement> recommendeds = new ArrayList<Advertisement>();
		int roomMean = 0;
		int bathroomMean = 0;
		int squareMetersMean = 0;
		List<String> location = new ArrayList<String>();
		double price = 0;
		int score = 0;

		for(int i = 0;i<searches.size();i++){
			
			Search auxSearch = searches.get(i);
			roomMean += auxSearch.getrooms();
			bathroomMean += auxSearch.getbathrooms();
			//squareMetersMean += auxSearch.getsquareMeters();
			location.add(auxSearch.getlocalization());
			price += auxSearch.getprice();
		}

		roomMean = roomMean / searches.size();
		bathroomMean = bathroomMean / searches.size();
		//squareMetersMean = squareMetersMean / searches.size();

		//Something maybe to work on this
		// location = location;
		price = price / searches.size();

		for(int i = 0;i<ads.size();i++){
			Advertisement auxAd = ads.get(i);
			score+= (auxAd.getrooms() - roomMean) *2;
			score+= (auxAd.getbathrooms() - bathroomMean) *2;
			//score+= ((auxAd.getsquareMeters() - squareMetersMean)/5) *2;
			// if(auxAd.getlocalization() == ){
			// 	score+=10;
			// }

			//Para un alquiler
			score+= ((auxAd.getprice() - roomMean)/50) *2;
			//Para una compra
			
			scores.put(score, i);
		}
			//Ordenar por puntuacion
			List<Integer> mapKeys = new ArrayList<>(scores.keySet());
			// List<String> mapValues = new ArrayList<>(scores.values());
			// Collections.sort(mapValues);
			Collections.sort(mapKeys);
			recommendeds.add(ads.get(scores.get(mapKeys.get(0))));
			recommendeds.add(ads.get(scores.get(mapKeys.get(1))));
			recommendeds.add(ads.get(scores.get(mapKeys.get(2))));
		


	 	model.addAttribute("recommendedAds", recommendeds);
        return "index";
	}

	@RequestMapping(value = "/properties/{id}")
    public String favAdvertisements(Model model, @PathVariable  long id) {
	 	model.addAttribute("Property", advertisementService.findById(id));
        return "properties-single";
    }
	
}