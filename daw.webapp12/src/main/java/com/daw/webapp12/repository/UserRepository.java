package com.daw.webapp12.repository;

import com.daw.webapp12.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<Users, Long> {
    Users findByName(String string);

}
