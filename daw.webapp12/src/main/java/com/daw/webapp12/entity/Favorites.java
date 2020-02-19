package com.daw.webapp12.entity;

import javax.persistence.*;

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
    private Advertisement advertisement;
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
     public Advertisement getAdvertisement() {
         return advertisement;
     }
 
     public void setAdvertisement(Advertisement adv) {
         this.advertisement = adv;
     }
 
 }