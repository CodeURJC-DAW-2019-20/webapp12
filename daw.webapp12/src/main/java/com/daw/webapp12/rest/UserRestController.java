package com.daw.webapp12.rest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.daw.webapp12.entity.Advertisement;
import com.daw.webapp12.entity.Users;
import com.daw.webapp12.security.UserComponent;
import com.daw.webapp12.service.AdvertisementService;
import com.daw.webapp12.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;


@RestController
@RequestMapping("/api/users")
public class UserRestController {

    @Autowired
    UserService userService;

    @Autowired
    UserComponent userComponent;

    @Autowired
    AdvertisementService advertisementService;

    @PutMapping("/{id}")
    public ResponseEntity<Users> addFavorite(@PathVariable long id) {

        if (userComponent.isLoggedUser()) {
            String userName = userComponent.getLoggedUser().getName();
            Optional<Users> user = userService.findByName(userName);
            Advertisement adv = advertisementService.findById(id);
            if (user.get().getMyFavourites().contains(adv)) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            } else {
                user.get().addFavourite(adv);
                userService.addUser(user.get());
                return new ResponseEntity<>(user.get(), HttpStatus.OK);
            }
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/favourites/{id}")
    public ResponseEntity<Users> deleteFromFavourite(@PathVariable long id) {

        String userName = userComponent.getLoggedUser().getName();
        Optional<Users> user = userService.findByName(userName);
        if (!user.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        user.get().deleteFavourite(id);
        userService.addUser(user.get());
        return new ResponseEntity<>(user.get(), HttpStatus.OK);
    }

    @DeleteMapping("/advertisements/{id}")
    public ResponseEntity<Users> deleteMyAdvertisement(@PathVariable long id) {

        String userName = userComponent.getLoggedUser().getName();
        Optional<Users> user = userService.findByName(userName);
        if (!user.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        user.get().deleteOneAdvertisement(id);
        userService.addUser(user.get());
        advertisementService.deleteAdvertisement(id);
        return new ResponseEntity<>(user.get(), HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<List<Advertisement>> favAdvertisements(@PathVariable long id) {
        Optional<Users> user = Optional.ofNullable(userService.findById(id));
        if (!user.isPresent()) return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        return new ResponseEntity<>(user.get().getMyFavourites(), HttpStatus.OK);
    }
}





