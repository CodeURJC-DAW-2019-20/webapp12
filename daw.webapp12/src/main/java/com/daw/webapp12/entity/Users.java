package com.daw.webapp12.entity;

import java.util.ArrayList;
import java.util.List;


import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "usuarios")
public class Users {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @NotNull
    private String nombre;

    private String email;

    private String contraseña;

    @OneToMany
    private List<Advertisement> myFavourites;

    @OneToMany(cascade=CascadeType.ALL)
    private List<Search> mySearches;

    public Users(){}

    public Users(String nombre, String email, String contraseña) {
        this.nombre = nombre;
        this.email = email;
        this.contraseña = contraseña;
        this.myFavourites = new ArrayList<Advertisement>();
        this.mySearches = new ArrayList<Search>();
    }

    public void addFavourite(Advertisement advertisement){
        this.myFavourites.add(advertisement);
    }

    public void deleteFavourite(Advertisement advertisement){
        this.myFavourites.remove(advertisement);
    }

    public long getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getContraseña() {
        return contraseña;
    }

    public void setContraseña(String contraseña) {
        this.contraseña = contraseña;
    }

    public List<Advertisement> getMyFavourites() {
        return myFavourites;
    }

    public void setMyFavourites(List<Advertisement> list) {
        this.myFavourites = list;
    }

    public List<Search> getMySearches() {
        return mySearches;
    }

    public void setMySearches(List<Search> list) {
        this.mySearches = list;
    }
}