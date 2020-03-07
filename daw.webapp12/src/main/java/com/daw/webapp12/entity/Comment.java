package com.daw.webapp12.entity;

import javax.persistence.*;

@Entity
@Table(name = "comment")
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;


    //@NotNull
    @OneToOne
    private Users author;


    private String message;

    public Comment(String message) {
       // this.author = author;
        this.message = message;
        //this.advertisement = advertisement;
    }

    public Comment() {}

    public long getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Users getAuthor() {
        return author;
    }

    public void setAuthor(Users author) {
        this.author = author;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}