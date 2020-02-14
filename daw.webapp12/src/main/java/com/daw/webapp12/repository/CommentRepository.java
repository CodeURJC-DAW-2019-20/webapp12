package com.daw.webapp12.repository;

import com.daw.webapp12.entity.Anuncio;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Anuncio, Long> {
}
