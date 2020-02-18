package com.daw.webapp12.repository;

import com.daw.webapp12.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByNombre(String string);
}
