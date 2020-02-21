package com.daw.webapp12;

import com.daw.webapp12.entity.Advertisement;
import com.daw.webapp12.entity.Blog;
import com.daw.webapp12.entity.Comment;
import com.daw.webapp12.entity.Search;
import com.daw.webapp12.entity.User;
import com.daw.webapp12.repository.AdvertisementRepository;
import com.daw.webapp12.repository.BlogRepository;
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
    AdvertisementRepository anuncioRepository;
    @Autowired
    CommentRepository commentRepository;
    @Autowired
    BlogRepository blogRepository;

    @PostConstruct
    public void init(){

        
        User user2 = new User("Edu", "edu@gmail.com","12345678");
        userRepository.save(user2);
        User user3 = new User("Karol","karol@gmail.com","12345678");
        userRepository.save(user3);
        User user4 = new User("Sebastian","sebastian@gmail.com","12345678");
        userRepository.save(user4);
        //User user5 = new User("Maria","maria@gmail.com","12345678");
        //userRepository.save(user5);
        
        //Advertisement(String tipo, String vivienda, Integer habitaciones, Integer baños, String metros2, String localizacion, String direccion, double precio)
        Advertisement anun1 = new Advertisement("Casa","Casa ",(Integer)4,(Integer)2,"120","Madrid","calle azul,2",(double)200000);
        Comment coment1= new Comment("Hola, me ha encantado");
        User user5 = new User("Maria","maria@gmail.com","12345678");
        userRepository.save(user5);
        coment1.setAuthor(user5);
        commentRepository.save(coment1);

        anun1.getComments().add(coment1);
        anuncioRepository.save(anun1);
        Advertisement anun2 = new Advertisement("Local","Local",(Integer)2,(Integer)1,"50","Madrid","calle verde,3",(double)12000);
        anuncioRepository.save(anun2);
        Advertisement anun3 = new Advertisement("Piso","Piso",(Integer)3,(Integer)1,"90","Pontevedra","calle carlos v,4,2 C",(double)80000);
        anuncioRepository.save(anun3);
        Advertisement anun4 = new Advertisement("Casa","Casa",(Integer)2,(Integer)1,"56","Valencia","calle verde,3",(double)78990);
        anuncioRepository.save(anun4);
        Advertisement anun5 = new Advertisement("Local","Local",(Integer)1,(Integer)1,"78","Madrid","calle verde,3",(double)12000);
        anuncioRepository.save(anun5);
        Advertisement anun6 = new Advertisement("Local","Local",(Integer)4,(Integer)2,"78","Mostoles","calle verde,3",(double)1400);
        anuncioRepository.save(anun6);
        Advertisement anun7 = new Advertisement("Local","Local",(Integer)3,(Integer)1,"78","Mostoles","calle verde,3",(double)1200);
        anuncioRepository.save(anun7);
        Advertisement anun8 = new Advertisement("Local","Local",(Integer)1,(Integer)1,"78","Mostoles","calle verde,3",(double)1000);
        anuncioRepository.save(anun8);
        Advertisement anun9 = new Advertisement("Local","Local",(Integer)3,(Integer)1,"78","Ciudad Real","calle verde,3",(double)650);
        anuncioRepository.save(anun9);

        Search search1 = new Search((Integer)2,(Integer)1,60,"Madrid",(double)800);
        Search search2 = new Search((Integer)3,(Integer)2,80,"Mostoles",(double)1000);
        Search search3 = new Search((Integer)1,(Integer)1,40,"Mostoles",(double)750);
        Search search4 = new Search((Integer)4,(Integer)3,100,"Mostoles",(double)1200);
        Search search5 = new Search((Integer)2,(Integer)2,70,"Madrid",(double)900);
        Search search6 = new Search((Integer)2,(Integer)1,55,"Fuenlabrada",(double)700);


        User user1 = new User("Angel","angel@gmail.com","12345678");
        user1.getMyFavourites().add(anun1);
        user1.getMyFavourites().add(anun2);
        user1.getMyFavourites().add(anun3);

        user1.getMySearches().add(search1);
        user1.getMySearches().add(search2);
        user1.getMySearches().add(search3);
        user1.getMySearches().add(search4);
        user1.getMySearches().add(search5);
        user1.getMySearches().add(search6);


        userRepository.save(user1);
           

        Blog blog1 = new Blog("CALIDEZ Y CARÁCTER SE ENCUENTRAN FRENTE A FRENTE EN ESTA CASA", "Los propietarios ");//de esta casa unifamiliar en una población cercana a Barcelona —una pareja con hijos adolescentes— querían reformarla para adaptarla a los tiempos modernos. Solo querían un lavado de cara y que les ayudáramos a escoger mobiliario y textiles para modernizar la vivienda.");
        blogRepository.save(blog1);

        Blog blog2 = new Blog("TENDENCIAS EN COCINAS QUE TE VOLVERÁN CRAZY ESTE 2020", "VERDE NATURAL" );//La preocupación por la sostenibilidad ha hecho que los tonos verdes más naturales se cuelen en nuestras cocinas durante este 2020. ACENTOS TURQUESA Los tonos turquesa no solo aportan luminosidad a la cocina, sino también mucha frescura. Además, resaltan un montón con otros colores de base como el blanco, y siempre se ven muy limpios. Ideales para armarios y azulejos.");        
        blogRepository.save(blog2);
    }
}