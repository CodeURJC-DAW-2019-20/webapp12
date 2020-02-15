package com.daw.webapp12.repository;

import com.daw.webapp12.entity.Favorites;

import org.springframework.data.jpa.repository.JpaRepository;

public interface FavoritesRepository extends JpaRepository<Favorites, Long> {
}