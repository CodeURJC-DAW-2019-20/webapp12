package com.daw.webapp12.rest;

import com.daw.webapp12.entity.Advertisement;
import com.daw.webapp12.entity.Users;
import com.daw.webapp12.repository.AdvertisementRepository;
import com.daw.webapp12.security.UserComponent;
import com.daw.webapp12.service.AdvertisementService;
import com.daw.webapp12.service.UserService;
import com.fasterxml.jackson.annotation.JsonView;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("api/advertisements")
public class AdvertisementRestController {

    @Autowired
    AdvertisementService advertisementService;
    @Autowired
    AdvertisementRepository advertisementRepository;
    @Autowired
    UserService userService;
    @Autowired
    UserComponent userComponent;

    @GetMapping("/")
    public ResponseEntity<List<Advertisement>> allAdvertisement(/*@RequestParam("id") long idAdver, */@RequestParam(value="page") int page,@RequestParam(value="number") int number) {
    //    Users users = userService.findById(idAdver);
    //     List<Advertisement> myAds = users.getMyAdvertisements();
    //     return myAds;
        Users user = userService.findByName(userComponent.getLoggedUser().getName()).get();
        List<Advertisement> myAds = user.getMyAdvertisements(page,number);
        if(myAds != null){
            return new ResponseEntity<>(myAds, HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

    // public List<Advertisement> allAdvertisement(@RequestParam("id") long id) {
    //     Users users = userService.findById(id);
    //     List<Advertisement> myAds = users.getMyAdvertisements();
    //     return myAds;
    // }

    @PutMapping("/")
    public List<Advertisement> uploadsAdvertisement(Advertisement anuncios, @RequestParam("id") long id) {
        Users users = userService.findById(id);
        List<Advertisement> myAds = users.getMyAdvertisements();
        advertisementRepository.save(anuncios);
        myAds.add(anuncios);
        return myAds;
    }

}