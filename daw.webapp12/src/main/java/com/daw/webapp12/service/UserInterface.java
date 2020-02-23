package com.daw.webapp12.service;

import com.daw.webapp12.entity.Users;

import java.util.List;

public interface UserInterface {

    public List<Users> findAll();

    public Users addUser (Users users);

    public void deleteUser (Users users);

    public Users findById(Long id);

    public Users findByName(String string);


}
