package com.daw.webapp12.controller;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import com.daw.webapp12.entity.Advertisement;
import com.daw.webapp12.entity.Search;
import com.daw.webapp12.service.AdvertisementService;
import com.daw.webapp12.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class AdvertisementController {

	@Autowired
	AdvertisementService advertisementService;

	@Autowired
	UserService userService;

	@RequestMapping(value = {"/MainPage", ""})
    public String recommendeds(Model model) {
		List<Advertisement> ads = advertisementService.findAll();
		List<Search> searches = userService.findByName("Angel").getMySearches();
		HashMap<Integer,Integer> scores = new HashMap<Integer,Integer>();
		List<Advertisement> recommendeds = new ArrayList<Advertisement>();
		int roomMean = 0;
		int bathroomMean = 0;
		int squareMetersMean = 0;
		List<String> locationsList = new ArrayList<String>();
		double price = 0;
		int score = 0;

		for(int i = 0;i<searches.size();i++){
			
			Search auxSearch = searches.get(i);
			roomMean += auxSearch.getrooms();
			bathroomMean += auxSearch.getbathrooms();
			squareMetersMean += auxSearch.getsquareMeters();
			locationsList.add(auxSearch.getlocation());
			price += auxSearch.getprice();
		}

		roomMean = roomMean / searches.size();
		bathroomMean = bathroomMean / searches.size();
		squareMetersMean = squareMetersMean / searches.size();

		for(int i = 0;i<ads.size();i++){
			Advertisement auxAd = ads.get(i);
			score+= (auxAd.getrooms() - roomMean) *2;
			score+= (auxAd.getbathrooms() - bathroomMean) *2;
			score+= ((auxAd.getsquareMeters() - squareMetersMean)/2) *2;
			
			if(locationsList.contains(auxAd.getlocation())){
			 	score+=20;
			}

			if(auxAd.gettype()=="Alquiler"){
				if(price - auxAd.getprice()>0){
					score+= ((price - auxAd.getprice())/50) *4;
				}
			}else if(auxAd.gettype()=="Compra"){
				if(price - auxAd.getprice()>0){
					score+= ((price - auxAd.getprice())/5000) *4;
				}
			}
			
			scores.put(score, i);
			score = 0;
		}
			List<Integer> mapKeys = new ArrayList<>(scores.keySet());
			Collections.sort(mapKeys);
			recommendeds.add(ads.get(scores.get(mapKeys.get(mapKeys.size()-1))));
			recommendeds.add(ads.get(scores.get(mapKeys.get(mapKeys.size()-2))));
			recommendeds.add(ads.get(scores.get(mapKeys.get(mapKeys.size()-3))));
		
			HashMap<String, Integer> mostCommonLocations = new HashMap<String, Integer>();
			for(int i = 0; i< ads.size();i++){
				String auxLocation = ads.get(i).getlocation();
				if(mostCommonLocations.containsKey(auxLocation)){
					int value = mostCommonLocations.get(auxLocation);
					mostCommonLocations.replace(auxLocation,value+1);
				}else{
					mostCommonLocations.put(auxLocation, 1);
				}
			}

			List<Map.Entry<String, Integer> > list = 
			new LinkedList<Map.Entry<String, Integer> >(mostCommonLocations.entrySet()); 

	 Collections.sort(list, new Comparator<Map.Entry<String, Integer> >() { 
		 public int compare(Map.Entry<String, Integer> o1,  
							Map.Entry<String, Integer> o2) 
		 { 
			 return (o2.getValue()).compareTo(o1.getValue());
		 } 
	 }); 
	   for(int i = 5;i<list.size();i++){
		list.remove(i);
	   }
	   	model.addAttribute("graphValues", list);
	 	model.addAttribute("recommendedAds", recommendeds);
        return "index";
	}


	@RequestMapping(value = "/properties/{id}")
    public String favAdvertisements(Model model, @PathVariable  long id) {
	 	model.addAttribute("Property", advertisementService.findById(id));
        return "properties-single";
	}


	private List<Advertisement> filters(List<Advertisement> result, int price, int squareMeters, int rooms,
										int bathrooms, String searchType, String propertyType) {
		List <Advertisement> search = new ArrayList<>();
		for (Advertisement advertisement : result) {
			if(advertisement.getbathrooms()>= bathrooms &&advertisement.getrooms()>=rooms
				&&advertisement.gettype().equals(searchType)&&advertisement.getproperty().equals(propertyType)
				&&advertisement.getsquareMeters() >= squareMeters&&advertisement.getprice() <= price)
				search.add(advertisement);	
		}
		return search;	
	
	}


	@RequestMapping(value = "/search")
	public String searchAdvertisement(Model model , @RequestParam  String location , @RequestParam int price, @RequestParam(value="searchType")  String searchType,@RequestParam(value="propertyType") String propertyType,
													@RequestParam  int squareMeters, @RequestParam(value="rooms")  int rooms, @RequestParam(value="bathrooms")  int bathrooms) {
		List<Advertisement> result= advertisementService.findByLocation(location);
		List<Advertisement> aux= result;
		aux= filters(aux, price,squareMeters,rooms,bathrooms,searchType,propertyType);
		if(aux.size()!=0){
			model.addAttribute("Property",aux);
		}else{
			model.addAttribute("Error", "No hay resultados.");
		}
        return "properties-search";
	}
	

	@RequestMapping("/deleteAdvertisement/{id}")
    public String deleteAdvertisement(Model model,@PathVariable long id){
        advertisementService.deleteAdvertisement(id);
        model.addAttribute("something",advertisementService.findAll());

		//For now return index
        return "index";
    }

	
	
}