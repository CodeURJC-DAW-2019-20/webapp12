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
    public List<Advertisement> allAdvertisement(@RequestParam("id") long id) {
        Users users = userService.findById(id);
        List<Advertisement> myAds = users.getMyAdvertisements();
        return myAds;
    }

    @PutMapping("/")
    public List<Advertisement> uploadsAdvertisement(Advertisement anuncios, @RequestParam("id") long id) {
        Users users = userService.findById(id);
        List<Advertisement> myAds = users.getMyAdvertisements();
        advertisementRepository.save(anuncios);
        myAds.add(anuncios);
        return myAds;
    }

    @PutMapping("/{id}")
    public ResponseEntity<Advertisement> editAdvertisement(@PathVariable long id, @RequestBody Advertisement newAdvertisement){
        Advertisement advertisement= advertisementService.findById(id);
        if (advertisement!= null){
            newAdvertisement.setId((int)id);
            advertisementService.addAdvertisement(newAdvertisement);
            return new ResponseEntity<>(newAdvertisement,HttpStatus.OK);

        }else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

    }

}