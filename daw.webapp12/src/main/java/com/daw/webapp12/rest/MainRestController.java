package com.daw.webapp12.rest;

import com.daw.webapp12.entity.Advertisement;
import com.daw.webapp12.entity.Users;
import com.daw.webapp12.security.UserComponent;
import com.daw.webapp12.service.AdvertisementService;
import com.daw.webapp12.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.*;

@RestController
@RequestMapping("api/main")
public class MainRestController {

    private final Logger log = LoggerFactory.getLogger(getClass());

    @Autowired
    AdvertisementService advertisementService;

    @Autowired
    UserComponent userComponent;

    @Autowired
    UserService userService;

    @PostMapping(value = "/upload-images")
    public ResponseEntity<?> misAnuncios(@RequestParam("id") long id, @RequestParam("file") MultipartFile[] multipartFile) {
        List<String> files = new ArrayList<>(5);
        Map<String, Object> response = new HashMap<>();
        Advertisement advertisement = advertisementService.findById(id);

        for (int i = 0; i < multipartFile.length; i++) {
            if (!multipartFile[i].isEmpty()) {
                String fileName = UUID.randomUUID().toString() + "_" + multipartFile[i].getOriginalFilename();
                Path filePath = Paths.get("daw.webapp12//src//main//resources//static//images").resolve(fileName).toAbsolutePath();
                log.info(filePath.toString());
                try {
                    Files.copy(multipartFile[i].getInputStream(), filePath);
                } catch (IOException e) {
                    response.put("mensaje", "Error al subir la imgen: " + fileName);
                    response.put("error", e.getMessage().concat(": ").concat(e.getCause().getMessage()));
                    return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
                }

                String oldImage = advertisement.getImages().get(i);
                if (oldImage != null && oldImage.length() > 0) {
                    Path oldPicturePath = Paths.get("daw.webapp12//src//main/resources//static//images").resolve(fileName).toAbsolutePath();
                    File oldFile = oldPicturePath.toFile();
                    if (oldFile.exists() && oldFile.canRead()) {
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

    @GetMapping("/upload-images/img/{fileName:.+}")
    public ResponseEntity<Resource> seeImages(@PathVariable String fileName) {
        Path filePath = Paths.get("src//main/resources//static//images").resolve(fileName).toAbsolutePath();
        log.info(filePath.toString());
        Resource resource = null;
        try {
            resource = new UrlResource(filePath.toUri());
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }

        if (!resource.exists() && !resource.isReadable()) {
            throw new RuntimeException("Can load image" + fileName);
        }
        HttpHeaders headers = new HttpHeaders();
        headers.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; fileName=\"" + resource.getFilename() + "\"");
        return new ResponseEntity<Resource>(resource, headers, HttpStatus.OK);
    }

    @GetMapping("/properties-modificar")
    public ResponseEntity<?> misAnuncios(){
        Users users = userService.findByName(userComponent.getLoggedUser().getName());
        return new ResponseEntity<>(users.getMyAdvertisements(),HttpStatus.ACCEPTED);

    }
}