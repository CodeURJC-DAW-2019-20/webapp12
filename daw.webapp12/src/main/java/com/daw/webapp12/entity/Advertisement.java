

package com.daw.webapp12.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "advertisement")
public class Advertisement
 {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;


    @NotNull
    private String type;

    private String property;

    private Integer rooms;

    private Integer bathrooms;

    private Integer  squareMeters;

    private String location;

    private String address;

    private double price;

    /*
    @ElementCollection
    private List<String> images = new ArrayList<>(5);*/
    private String images;

    @OneToMany
    private List<Comment> comments;


    public Advertisement(){}

    public Advertisement(String type, String property,  Integer rooms, Integer bathrooms, int squareMeters,  String location, String address, double price) {
        this.type = type;
        this.property = property;
        this.rooms = rooms;
        this.bathrooms = bathrooms;
        this.squareMeters = squareMeters;
        this.location = location;
        this.address = address;
        this.price = price;
        this.comments = new ArrayList<Comment>();
    }

     public Advertisement(String type, String property,  Integer rooms, Integer bathrooms, int squareMeters,  String location, String address, double price, String images) {
         this.type = type;
         this.property = property;
         this.rooms = rooms;
         this.bathrooms = bathrooms;
         this.squareMeters = squareMeters;
         this.location = location;
         this.address = address;
         this.price = price;
         this.images = images;
         this.comments = new ArrayList<Comment>();
     }

    public long getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String gettype() {
        return type;
    }

    public void settype(String type) {
        this.type = type;
    }

    public String getproperty() {
        return property;
    }
    public void setComment(Comment comment) {
        this.comments.add(comment);
    }

    public List<Comment> getComments() {
        return comments;
    }


    public void setproperty(String property) {
        this.property = property;
    }

    public Integer getrooms() {
        return rooms;
    }

    public void setrooms(Integer rooms) {
        this.rooms = rooms;
    }

    public Integer getbathrooms() {
        return bathrooms;
    }

    public void setbathrooms(Integer bathrooms) {
        this.bathrooms = bathrooms;
    }

    public int getsquareMeters() {
        return squareMeters;
    }

    public void setsquareMeters(int squareMeters) {
        this.squareMeters = squareMeters;
    }

    public String getlocation() {
        return location;
    }

    public void setlocation(String location) {
        this.location = location;
    }

    public String getaddress() {
        return address;
    }

    public void setaddress(String address) {
        this.address = address;
    }

    public double getprice() {
        return price;
    }

    public void setprice(double price) {
        this.price = price;
    }

    public String getImages(){ return images;}

    public void setImages(String images){this.images = images;}
}
