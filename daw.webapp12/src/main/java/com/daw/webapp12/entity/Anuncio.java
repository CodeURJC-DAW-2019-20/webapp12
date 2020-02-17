package com.daw.webapp12.entity;

import java.util.List;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "anuncios")
public class Anuncio {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;


    @NotNull
    private String tipo;

    private String vivienda;

    private Integer habitaciones;

    private Integer baños;

    private String  metros2;

    private String localizacion;

    private String direccion;

    private double precio;
    
    @OneToMany(cascade=CascadeType.ALL)
    private List<Comment> comments;


    public Anuncio(String tipo, String vivienda,  Integer habitaciones, Integer baños, String metros2,  String localizacion, String direccion, double precio) {
        this.tipo = tipo;
        this.vivienda = vivienda;
        this.habitaciones = habitaciones;
        this.baños = baños;
        this.metros2 = metros2;
        this.localizacion = localizacion;
        this.direccion = direccion;
        this.precio = precio;
    }

    public long getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public String getVivienda() {
        return vivienda;
    }

    public void setVivienda(String vivienda) {
        this.vivienda = vivienda;
    }

    public Integer getHabitaciones() {
        return habitaciones;
    }

    public void setHabitaciones(Integer habitaciones) {
        this.habitaciones = habitaciones;
    }

    public Integer getBaños() {
        return baños;
    }

    public void setBaños(Integer baños) {
        this.baños = baños;
    }

    public String getMetros2() {
        return metros2;
    }

    public void setMetros2(String metros2) {
        this.metros2 = metros2;
    }

    public String getLocalizacion() {
        return localizacion;
    }

    public void setLocalizacion(String localizacion) {
        this.localizacion = localizacion;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public double getPrecio() {
        return precio;
    }

    public void setPrecio(double precio) {
        this.precio = precio;
    }
}
