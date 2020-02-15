package com.daw.webapp12;

import com.daw.webapp12.entity.Anuncio;
import com.daw.webapp12.entity.Comment;
import com.daw.webapp12.entity.User;
import com.daw.webapp12.repository.AnuncioRepository;
import com.daw.webapp12.repository.CommentRepository;
import com.daw.webapp12.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

@Component
public class iniBBDD {

    @Autowired
    UserRepository userRepository;
    @Autowired
    AnuncioRepository anuncioRepository;
    @Autowired
    CommentRepository commentRepository;

    @PostConstruct
    public  void init(){

        User user1 = new User("Angel","angel@gmail.com","12345678");
        userRepository.save(user1);
        User user2 = new User("Edu", "edu@gmail.com","12345678");
        userRepository.save(user2);
        User user3 = new User("Karol","karil@gmail.com","12345678");
        userRepository.save(user3);
        User user4 = new User("Sebastian","sebastian@gmail.com","12345678");
        userRepository.save(user4);
        User user5 = new User("Maria","maria@gmail.com","12345678");
        userRepository.save(user5);
        
        //Anuncio(String tipo, String vivienda, Integer habitaciones, Integer baños, String metros2, String localizacion, String direccion, double precio)
        Anuncio anun1 = new Anuncio("Casa","Casa ",(Integer)4,(Integer)2,"120","Madrid","calle azul,2",(double)200000);
        anuncioRepository.save(anun1);
        Anuncio anun2 = new Anuncio("Local","Local",(Integer)2,(Integer)1,"50","Madrid","calle verde,3",(double)12000);
        anuncioRepository.save(anun2);
        Anuncio anun3 = new Anuncio("Piso","Piso",(Integer)3,(Integer)1,"90","Pontevedra","calle carlos v,4,2 C",(double)80000);
        anuncioRepository.save(anun3);
        Anuncio anun4 = new Anuncio("Casa","Casa",(Integer)2,(Integer)1,"56","Madrid","calle verde,3",(double)78990);
        anuncioRepository.save(anun4);
        Anuncio anun5 = new Anuncio("Local","Local",(Integer)1,(Integer)1,"78","Madrid","calle verde,3",(double)12000);
        anuncioRepository.save(anun5);


        Comment s1 = new Comment("Genial casero");
        s1.setAdvertisement(new Anuncio("Casa", "Casita", (Integer)3, (Integer)2, "70", "Barcelona", "plz.Luis XV, 35", (double)34000));
        s1.setAuthor(new User("Pepe", "pepe@mmail.com", "123abc."));
        commentRepository.save(s1);

    }

}
