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
@RequestMapping("api/advertisement")
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
    public List<Advertisement> allAdvertisement(@RequestParam("id") long idAdver){
        Users users = userService.findById(idAdver);
        List<Advertisement> myAds = users.getMyAdvertisements();
        return myAds;
    }

    @PutMapping ("/")
    public List<Advertisement> uploadsAdvertisement(Advertisement anuncios, @RequestParam("id") long idAdver){
        Users users = userService.findById(idAdver);
        List<Advertisement> myAds = users.getMyAdvertisements();
        advertisementRepository.save(anuncios);
        myAds.add(anuncios);
        return myAds;
    }

    @DeleteMapping("/deleteMyFavorites/{id}")
    public ResponseEntity<?> deleteFavorites(@RequestParam("id") long idAdver, @RequestParam("idUsers") long idUsers){
        Map<String, Object> response = new HashMap<>();
        Users users = userService.findById(idUsers);
        long auxId = 0;
        List<Advertisement> advertisement = users.getMyFavourites();
        try {
            for(int i = 0; i< advertisement.size(); i++){
                if(advertisement.get(i).getId() == idAdver){
                    auxId = advertisement.get(i).getId();
                }else{
                    response.put("mensaje", "Este anauncio no está en tu lista de favoritos");
                    return  new ResponseEntity<>(response, HttpStatus.UNAUTHORIZED);
                }
            }
        }catch (Exception e){
            response.put("mensaje", "Error al intentar eliminar anuncio");
            response.put("error", e.getMessage().concat(": ").concat(e.getCause().getMessage()));
            return  new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        advertisement.remove(auxId);
        //advertisementService.deleteAdvertisement();
        response.put("advertidAdverisemente", advertisement);
        response.put("mensaje", "El anuncio ha sido eliminado de tu lista de anuncios");
        return new ResponseEntity<Map<String, Object>>(response, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public ResponseEntity<?> deleteAdvertisement(@PathVariable Long id){
        Map<String, Object> response = new HashMap<>();
        Optional<Users> user = userService.findByName(userComponent.getLoggedUser().getName());
        List<Advertisement>  userFavoriteAds  = user.get().getMyFavourites();
        List<Advertisement> userAdvertisement = user.get().getMyAdvertisements();
        Advertisement advertisement = this.advertisementService.findById(id);
        try {

            for(int i = 0; i < userFavoriteAds.size(); i++){
                if(userFavoriteAds.get(i) == advertisement){
                    userFavoriteAds.remove(i);
                    //advertisementService.deleteAdvertisement(advertisement.getId());
                }
            }
            for(int i = 0; i < userAdvertisement.size(); i++){
                if(userAdvertisement.get(i) == advertisement){
                    userAdvertisement.remove(i);
                    advertisementService.deleteAdvertisement(advertisement.getId());
                }
            }

        }catch (DataAccessException e){
            response.put("mensaje", "Error al borrar el anuncio: ".concat(advertisement.gettype() + " " + advertisement.getlocation()));
            response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        response.put("mensaje", "El anuncio: ".concat(advertisement.gettype()+ " "+advertisement.getlocation().concat(" ha sido borrado con exito ;)")));
        response.put("anuncio", advertisement);
        return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
    }

}
