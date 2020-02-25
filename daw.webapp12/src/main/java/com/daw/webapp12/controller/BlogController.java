package com.daw.webapp12.controller;

import com.daw.webapp12.service.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class BlogController {

	@Autowired
	private BlogService blogService;

	@RequestMapping(value = "/blog")
    public String blogs(Model model) {
	 	model.addAttribute("blogs", blogService.findAll());
        return "blog";
	}
	@RequestMapping(value = "/blog/{id}")
    public String blogSingle(Model model, @PathVariable Long id) {
	 	model.addAttribute("blog", blogService.findById(id));
        return "blog";
    }

}