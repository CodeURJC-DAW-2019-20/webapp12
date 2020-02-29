package com.daw.webapp12.restController;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.daw.webapp12.entity.Advertisement;
import com.daw.webapp12.entity.Users;
import com.daw.webapp12.security.UserComponent;
import com.daw.webapp12.service.AdvertisementService;
import com.daw.webapp12.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;



@RestController
@RequestMapping
public class UserRestController {

    @Autowired
    UserService userService;

    @Autowired
    UserComponent userComponent;

    @Autowired
    AdvertisementService advertisementService;

    @PutMapping("/addFavorite/{id}")
    public ResponseEntity<Users> addFavorite(@PathVariable long id) {

        if (userComponent.isLoggedUser()) {
            String userName = userComponent.getLoggedUser().getName();
            Users user = userService.findByName(userName);
            Advertisement adv = advertisementService.findById(id);
            if (user.getMyFavourites().contains(adv)) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            } else {
                user.addFavourite(adv);
                userService.addUser(user);
                return new ResponseEntity<>(user, HttpStatus.OK);
            }
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}





