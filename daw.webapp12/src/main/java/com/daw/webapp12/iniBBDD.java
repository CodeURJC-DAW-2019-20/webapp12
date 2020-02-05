package com.daw.webapp12;


import com.daw.webapp12.entity.User;
import com.daw.webapp12.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

@Component
public class iniBBDD {

    @Autowired
    UserRepository userRepository;

    @PostConstruct
    public  void init(){

        User user1 = new User("Angel","angel@gmail.com","12345678");
        userRepository.save(user1);
        User user2 = new User("Edu", "edu@gmail.com","12345678");
        userRepository.save(user2);
        User user3 = new User("Angel","angel@gmail.com","12345678");
        userRepository.save(user3);
        User user4 = new User("Angel","angel@gmail.com","12345678");
        userRepository.save(user4);
        User user5 = new User("Angel","angel@gmail.com","12345678");
        userRepository.save(user5);

    }

}
