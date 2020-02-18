package com.daw.webapp12;import com.daw.webapp12.entity.Advertisement;
import com.daw.webapp12.entity.Blog;
import com.daw.webapp12.entity.Comment;
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

        User user1 = new User("Angel","angel@gmail.com","12345678");
        userRepository.save(user1);
        User user2 = new User("Edu", "edu@gmail.com","12345678");
        userRepository.save(user2);
        User user3 = new User("Karol","karol@gmail.com","12345678");
        userRepository.save(user3);
        User user4 = new User("Sebastian","sebastian@gmail.com","12345678");
        userRepository.save(user4);
        User user5 = new User("Maria","maria@gmail.com","12345678");
        userRepository.save(user5);
        
        //Advertisement(String tipo, String vivienda, Integer habitaciones, Integer baños, String metros2, String localizacion, String direccion, double precio)
        Advertisement anun1 = new Advertisement("Casa","Casa ",(Integer)4,(Integer)2,"120","Madrid","calle azul,2",(double)200000);
        anuncioRepository.save(anun1);
        Advertisement anun2 = new Advertisement("Local","Local",(Integer)2,(Integer)1,"50","Madrid","calle verde,3",(double)12000);
        anuncioRepository.save(anun2);
        Advertisement anun3 = new Advertisement("Piso","Piso",(Integer)3,(Integer)1,"90","Pontevedra","calle carlos v,4,2 C",(double)80000);
        anuncioRepository.save(anun3);
        Advertisement anun4 = new Advertisement("Casa","Casa",(Integer)2,(Integer)1,"56","Madrid","calle verde,3",(double)78990);
        anuncioRepository.save(anun4);
        Advertisement anun5 = new Advertisement("Local","Local",(Integer)1,(Integer)1,"78","Madrid","calle verde,3",(double)12000);
        anuncioRepository.save(anun5);

        Blog blog1 = new Blog("CALIDEZ Y CARÁCTER SE ENCUENTRAN FRENTE A FRENTE EN ESTA CASA", "Los propietarios ");//de esta casa unifamiliar en una población cercana a Barcelona —una pareja con hijos adolescentes— querían reformarla para adaptarla a los tiempos modernos. Solo querían un lavado de cara y que les ayudáramos a escoger mobiliario y textiles para modernizar la vivienda.");
        blogRepository.save(blog1);

        Blog blog2 = new Blog("TENDENCIAS EN COCINAS QUE TE VOLVERÁN CRAZY ESTE 2020", "VERDE NATURAL" );//La preocupación por la sostenibilidad ha hecho que los tonos verdes más naturales se cuelen en nuestras cocinas durante este 2020. ACENTOS TURQUESA Los tonos turquesa no solo aportan luminosidad a la cocina, sino también mucha frescura. Además, resaltan un montón con otros colores de base como el blanco, y siempre se ven muy limpios. Ideales para armarios y azulejos.");        
        blogRepository.save(blog2);
    }
}