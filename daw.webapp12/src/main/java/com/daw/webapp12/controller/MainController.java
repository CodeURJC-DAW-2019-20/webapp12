package com.daw.webapp12.controller;

import com.daw.webapp12.entity.Advertisement;
import com.daw.webapp12.repository.AdvertisementRepository;
import com.daw.webapp12.security.UserComponent;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;


@Controller
public class MainController {

    private final Logger log = LoggerFactory.getLogger(getClass());
    @Autowired
	UserComponent userComponent;
    @Autowired
    AdvertisementRepository  advertisementRepository;

    @RequestMapping("/properties-modificar")
    public String misAnuncios(){
        if(userComponent.isLoggedUser()){
            return "properties-modificar";
        }else{
            return "login";
        }
       
    }

    @PostMapping("/properties-modificar")
    public String misAnuncios(Advertisement advertisement, Model model, @RequestParam ("file") MultipartFile multipartFile){

        if (!multipartFile.isEmpty()) {
            //Path rootPath = Paths.get("src//main/resources//static//images").resolve(multipartFile.getOriginalFilename());
            //Path rootAbsolutePath = rootPath.toAbsolutePath();
            Path directorioRecursos = Paths.get("src//main/resources//static//images");
            String rootPath = directorioRecursos.toFile().getAbsolutePath();
            log.info("rootPath: " + rootPath);
            //log.info("rootAbsolutePath: " + rootAbsolutePath);
            try {
                //Files.copy(multipartFile.getInputStream(), rootAbsolutePath);
                //advertisement.setImages(multipartFile.getOriginalFilename());
                byte[] bytes = multipartFile.getBytes();
                Path rupacompleta = Paths.get(rootPath + "//" + multipartFile.getOriginalFilename());
                Files.write(rupacompleta, bytes);
                advertisement.setImages(multipartFile.getOriginalFilename()+advertisement.getId());
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        model.addAttribute("misAnuncios", "SUBIR ANUNCIOS");
        advertisementRepository.save(advertisement);
        return "properties-modificar";
    }

    @RequestMapping(value = "/property-upload", method = RequestMethod.GET)
    public String ponerAnuncios() {
        return "property-upload";
    }

}
