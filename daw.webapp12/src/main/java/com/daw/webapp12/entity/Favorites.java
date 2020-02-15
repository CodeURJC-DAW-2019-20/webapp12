package com.daw.webapp12.entity;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "Favorites")
public class Favorites {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;


    //@NotNull
    @OneToOne(cascade=CascadeType.ALL)
    private User user;
    @OneToOne(cascade=CascadeType.ALL)
    private Anuncio advertisement;
    public Favorites() {}
 
     public long getId() {
         return id;
     }
 
     public void setId(int id) {
         this.id = id;
     }
 
     public User getUser() {
         return user;
     }
 
     public void setUser(User user) {
         this.user = user;
     }
     public Anuncio getAdvertisement() {
         return advertisement;
     }
 
     public void setAdvertisement(Anuncio adv) {
         this.advertisement = adv;
     }
 
 }