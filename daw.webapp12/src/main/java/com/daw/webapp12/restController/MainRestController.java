package com.daw.webapp12.restController;
import com.daw.webapp12.entity.Advertisement;
import com.daw.webapp12.entity.Users;
import com.daw.webapp12.service.AdvertisementService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.*;

@RestController
@RequestMapping
public class MainRestController {

    private final Logger log = LoggerFactory.getLogger(getClass());

    @Autowired
    AdvertisementService advertisementService;

    @PostMapping(value = "/images")
    public ResponseEntity<?> misAnuncios(@RequestParam long id, @RequestParam("file") MultipartFile[] multipartFile, @RequestParam String location) {
        List<String> files = new ArrayList<>(5);
        Map<String, Object> response = new HashMap<>();
        Advertisement advertisement = advertisementService.findById(id);

        for (int i = 0; i < multipartFile.length; i++) {
            if (!multipartFile[i].isEmpty()) {
                String fileName = UUID.randomUUID().toString() + "_" + multipartFile[i].getOriginalFilename();
                Path filePath = Paths.get("daw.webapp12//src//main/resources//static//images").resolve(fileName).toAbsolutePath();
                log.info(filePath.toString());
                try {
                    Files.copy(multipartFile[i].getInputStream(), filePath);
                } catch (IOException e) {
                    response.put("mensaje", "Error al subir la imgen: " + fileName);
                    response.put("error", e.getMessage().concat(": ").concat(e.getCause().getMessage()));
                    return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
                }

                String oldImage = advertisement.getImages().get(i);
                if(oldImage != null && oldImage.length() > 0){
                    Path oldPicturePath = Paths.get("daw.webapp12//src//main/resources//static//images").resolve(fileName).toAbsolutePath();
                    File oldFile = oldPicturePath.toFile();
                    if(oldFile.exists() && oldFile.canRead()){
                        oldFile.delete();
                    }
                }
                files.add(fileName);
            }

        }
        advertisement.setImages(files);
        advertisementService.addAdvertisement(advertisement);
        response.put("advertisemente", advertisement);
        response.put("mensaje", "Has Subido correctamente las imagenes");
        return new ResponseEntity<Map<String, Object>>(response, HttpStatus.CREATED);
    }
}
