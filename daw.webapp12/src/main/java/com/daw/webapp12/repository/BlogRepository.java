package com.daw.webapp12.repository;

import com.daw.webapp12.entity.Anuncio;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BlogRepository extends JpaRepository<Anuncio, Long> {
}
