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
    private Users users;
    @OneToOne(cascade=CascadeType.ALL)
    private Advertisement advertisement;
    public Favorites() {}
 
     public long getId() {
         return id;
     }
 
     public void setId(int id) {
         this.id = id;
     }
 
     public Users getUsers() {
         return users;
     }
 
     public void setUsers(Users users) {
         this.users = users;
     }
     public Advertisement getAdvertisement() {
         return advertisement;
     }
 
     public void setAdvertisement(Advertisement adv) {
         this.advertisement = adv;
     }
 
 }