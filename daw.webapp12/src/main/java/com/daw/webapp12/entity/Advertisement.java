

package com.daw.webapp12.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
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

    private String  squareMeters;

    private String location;

    private String address;

    private double price;

    @OneToMany(cascade=CascadeType.ALL)
    private List<Comment> comments;


    public Advertisement(){}

    public Advertisement(String type, String property,  Integer rooms, Integer bathrooms, String squareMeters,  String location, String address, double price) {
        this.type = type;
        this.property = property;
        this.rooms = rooms;
        this.bathrooms = bathrooms;
        this.squareMeters = squareMeters;
        this.location = location;
        this.address = address;
        this.price = price;
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
        this.comments = new ArrayList<Comment>();
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

    public String getsquareMeters() {
        return squareMeters;
    }

    public void setsquareMeters(String squareMeters) {
        this.squareMeters = squareMeters;
    }

    public String getlocalization() {
        return location;
    }

    public void setlocalization(String location) {
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
}
