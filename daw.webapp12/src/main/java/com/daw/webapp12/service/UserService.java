package com.daw.webapp12.service;

import com.daw.webapp12.entity.User;
import com.daw.webapp12.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class UserService implements UserInterface {

    @Autowired
    UserRepository userRepository;
    @Override
    public List<User> findAll() {
        return  userRepository.findAll();
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
