package com.daw.webapp12.service;

import com.daw.webapp12.entity.User;
import com.daw.webapp12.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class UserService implements UserInterface {

    @Autowired
    private UserRepository userRepository;
    
    @Override
    public List<User> findAll() {
        return  userRepository.findAll();
    }

    @Override
    public User findExample(String string) {
        return userRepository.findByNombre(string);
    }

    @Override
    public User addCliente(User user) {
        return userRepository.save(user);
    }

    @Override
    public void deleteUsuario(User user) {
        userRepository.delete(user);
    }

    @Override
    public User findById(Long id) {
        return userRepository.findById(id).orElse(null);
    }
}
