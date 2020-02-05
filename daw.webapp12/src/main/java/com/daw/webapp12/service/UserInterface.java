package com.daw.webapp12.service;

import com.daw.webapp12.entity.User;

import java.util.List;

public interface UserInterface {

    public List<User> findAll();

    public User addCliente (User user);

    public void deleteUsuario (User user);

    public User findById(Long id);


}
