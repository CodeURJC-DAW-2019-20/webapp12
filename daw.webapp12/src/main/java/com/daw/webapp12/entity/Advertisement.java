package com.daw.webapp12.entity;

import javax.persistence.*;

@Entity
@Table(name = "advertisements")
public class Advertisement {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String propertyType;
    private String advertisementType;
    private int roomsNumber;
    private int bathroomsNumber;
    private String description;
    private int squareMeters;
    private String city;
    private String address;
    private int price;

    public Advertisement(){}

    public Advertisement(String propertyType,String advertisementType, int roomsNumber, int bathroomsNumber, String description, int squareMeters, String localidad,
                   String city, String address, int price){
        this.propertyType = propertyType;
        this.advertisementType = advertisementType;
        this.roomsNumber = roomsNumber;
        this.bathroomsNumber = bathroomsNumber;
        this.description = description;
        this.squareMeters = squareMeters;
        this.city = city;
        this.address = address;
        this.price = price;

    }


}
