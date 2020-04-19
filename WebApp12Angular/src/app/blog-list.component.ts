import { Component } from '@angular/core';
import { BlogService } from './service/blog.service';
import { Blog } from './entity/blog';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    templateUrl:
    './blog-list.component.html',
})

export class blogListComponent {
    blogs: Blog[];
    canDelete: boolean = false;
    startPage : number;
    paginationLimit:number; 

    constructor(private blogService: BlogService,private router: Router) {
        this.blogs = [];
        this.startPage = 0;
        this.paginationLimit = 4;
    }

    ngOnInit() {
        if ( localStorage.getItem('role') != null ) {
            if (localStorage.getItem('role').localeCompare('ROLE_ADMIN') == 0) {
              this.canDelete = true;
            }
        }
        this.blogService.getBlogs(0, 50).subscribe(
            blogs => this.blogs = blogs,
            error => console.log(error)
        );
    }

    getBlogs(page: number, quantity: number) {
        this.blogService.getBlogs(page, quantity).subscribe(
            blogs => this.blogs = blogs,
            error => console.log(error)
        );
    }

    deleteBlog(id: number) {
        this.blogService.deleteBlog(id).subscribe(
            () => window.location.reload(),
            error => console.log(error)
        );
    }
    showMoreItems(){
        this.paginationLimit = Number(this.paginationLimit) + 4;        
    }
    showLessItems(){
        this.paginationLimit = Number(this.paginationLimit) - 4;
    }
}