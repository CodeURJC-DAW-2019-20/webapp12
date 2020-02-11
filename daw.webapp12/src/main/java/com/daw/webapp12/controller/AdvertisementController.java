package com.daw.webapp12.controller;


import com.daw.webapp12.entity.Advertisement;
import org.springframework.beans.factory.annotation.Autowired;

@Controller
@RequestMapping("/Advertisements")
public class AdvertisementController {

    @Autowired
    private AdvertisementService AdvertisementService;

    /*@GetMapping("/")
    public */

    @PostMapping("/")
    @ResponseStatus(HttpStatus.CREATED)
    public Advertisement saveAdvertisement(@RequestBody Advertisement Advertisement){
        AdvertisementService.saveAdvertisement(Advertisement);
        return Advertisement;
    }

    @DeleteMapping("/{id}")
    public Advertisement deleteAdvertisement(@PathVariable long id){
        Advertisement deleteAdvertisement = AdvertisementService.findOne(id).get();
        AdvertisementService.deleteAdvertisement(id);
        return deleteAdvertisement;
    }

    @PutMapping("/{id}")
    public Advertisement updateAdvertisement(@PathVariable long id, @RequestBody Advertisement updateAdvertisement){
        AdvertisementService.findOne(id).get();
        updateAdvertisement.SetId(id);
        AdvertisementService.saveAdvertisement(updateAdvertisement);
        return updateAdvertisement;
    }

}
