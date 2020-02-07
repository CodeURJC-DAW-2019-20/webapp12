package com.daw.webapp12.entity;

import javax.persistence.*;

@Entity
@Table(name = "anuncios")
public class Anuncio {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;


}
