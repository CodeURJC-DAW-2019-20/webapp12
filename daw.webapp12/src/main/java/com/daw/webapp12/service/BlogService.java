package com.daw.webapp12.service;

import java.util.List;

import com.daw.webapp12.entity.Blog;
import com.daw.webapp12.repository.BlogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class BlogService {

    @Autowired
    private BlogRepository blogRepository;

    public List<Blog> findAll(){
        return blogRepository.findAll();
    }
}