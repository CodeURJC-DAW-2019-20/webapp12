package com.daw.webapp12.service;

import com.daw.webapp12.entity.Users;
import com.daw.webapp12.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService implements UserInterface {

    @Autowired
    private UserRepository userRepository;
    
    @Override
    public List<Users> findAll() {
        return  userRepository.findAll();
    }

    @Override
    public Users findExample(String string) {
        return userRepository.findByNombre(string);
    }

    @Override
    public Users addCliente(Users users) {
        return userRepository.save(users);
    }

    @Override
    public void deleteUsuario(Users users) {
        userRepository.delete(users);
    }

    @Override
    public Users findById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

}
