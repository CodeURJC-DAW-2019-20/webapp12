import { Component } from '@angular/core';
import { BlogService } from './service/blog.service';
import { Observable } from 'rxjs';
import {Router,ActivatedRoute} from "@angular/router";
import { Blog } from './entity/blog';

@Component({
    templateUrl:
    './blog-upload.component.html',
})

export class blogUploadComponent {
    title: string;
    description: string;
    images: File;
    imagesOnString: string;
    isNew: boolean;
    blog: Blog;

    constructor(private blogService: BlogService,private router: Router,activatedRoute:ActivatedRoute) {
        const id=activatedRoute.snapshot.params['id'];
        if(id){
            this.isNew=false;
            this.blog = new Blog("","",null);
            blogService.getBlog(id).subscribe(
                blog => this.blog = blog,
                error => console.log(error)
            );
        }else{
            this.isNew=true;
        }
    }

    createBlog(filename: string){
        console.log("entering");
        this.blogService.uploadFile(this.images);
        
        console.log(this.title);
        console.log(this.description);
        console.log(filename);
        var blog = new Blog(this.title, this.description,this.images);
        this.blogService.addBlog(blog).subscribe(
            () =>  this.router.navigate(['/blog']),
            error => console.log(error)
        );
    }

}