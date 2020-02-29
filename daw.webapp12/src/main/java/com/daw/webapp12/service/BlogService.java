package com.daw.webapp12.service;

import java.util.List;
import java.util.Optional;

import com.daw.webapp12.entity.Blog;
import com.daw.webapp12.repository.BlogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class BlogService {

    @Autowired
    private BlogRepository blogRepository;

    public List<Blog> findAll() {
        return blogRepository.findAll();
    }

    public Optional<Blog> findById(Long id) {
        return blogRepository.findById(id);
    }

    public Blog addBlog(Blog blog){
        return blogRepository.save(blog);
    }

    public void deleteBlog(Long id){
        blogRepository.deleteById(id);
    }
}
