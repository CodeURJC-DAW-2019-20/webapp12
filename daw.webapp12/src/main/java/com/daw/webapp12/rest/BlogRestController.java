package com.daw.webapp12.rest;

import java.util.ArrayList;
import java.util.List;

import com.daw.webapp12.entity.Blog;
import com.daw.webapp12.service.BlogService;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.slf4j.LoggerFactory;

@RestController
@RequestMapping("/api")
public class BlogRestController {

    private final Logger log = LoggerFactory.getLogger(getClass());
    @Autowired
	private BlogService blogService;

    @RequestMapping(value = "/blog/{{id}}", method = RequestMethod.GET)
    public ResponseEntity<Blog> getBlog(@PathVariable long id){
        Blog blog = blogService.findById(id);
        if(blog != null){
            return new ResponseEntity<>(blog, HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }  
    }

    @RequestMapping(value = "/blog", method = RequestMethod.GET)
    public List<Blog> getBlogs(@PageableDefault(value =5) Pageable pageable){
        List<Blog> blogs = blogService.findAll();
        return blogs;
    }

    @RequestMapping(value = "/blog-upload", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED)
    public Blog blogUpload( @RequestParam("file") MultipartFile[] multipartFile, @RequestParam String title, @RequestParam String description){
        List<String> files = new ArrayList<String>(5);
        for (int i = 0; i < multipartFile.length; i++) {
            if (!multipartFile[i].isEmpty()) {
                Path directorioRecursos = Paths.get("daw.webapp12//src//main/resources//static//images");
                String rootPath = directorioRecursos.toFile().getAbsolutePath();
                log.info("rootPath: " + rootPath);
                try {
                    byte[] bytes = multipartFile[i].getBytes();
                    Path rupacompleta = Paths.get(rootPath + "//" + multipartFile[i].getOriginalFilename());
                    Files.write(rupacompleta, bytes);
                    files.add(multipartFile[i].getOriginalFilename());

                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
        Blog blog = new Blog(title, description);
		blog.setImages(files);
        blogService.addBlog(blog);

        return blog;
    }

}
