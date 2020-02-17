package com.daw.webapp12.service;

import java.util.List;

import com.daw.webapp12.entity.Advertisement;
import com.daw.webapp12.repository.AdvertisementRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class AdvertisementService {

    @Autowired
    private AdvertisementRepository advertisementRepository;

    public List<Advertisement> findAll(){
        return advertisementRepository.findAll();
    }
}
