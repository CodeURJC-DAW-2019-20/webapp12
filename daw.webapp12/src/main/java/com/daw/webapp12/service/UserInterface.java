package com.daw.webapp12.service;

import com.daw.webapp12.entity.Users;

import java.util.List;

public interface UserInterface {

    public List<Users> findAll();

    public Users addCliente (Users users);

    public void deleteUsuario (Users users);

    public Users findById(Long id);

    public Users findExample(String string);


}
