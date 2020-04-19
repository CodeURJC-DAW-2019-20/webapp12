import { Component, ViewChild, ElementRef } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
import { CommentService } from './service/comment.service';
import {Comment} from './entity/comment';


@Component({
    selector: 'commentMessage',
    templateUrl: './comment.component.html',

})
export class commentComponent {


    comments : Comment[] = [];
    message= "";
    postComment=[];
    isLogged : boolean= false;
    id: number;
    activatedRoute: ActivatedRoute

    constructor(private router: Router, activatedRoute: ActivatedRoute, private commentService: CommentService) {
        let id = activatedRoute.snapshot.params['id'];
        this.id =id;
        this.getComments(id);
    }

    ngOnInit(){
        if(localStorage.getItem('role')!= null){
            if(localStorage.getItem('role').localeCompare('ROLE_USER')== 0){
                this.isLogged=true;
            }
        }
    }

    post(){
        this.postComment.push(this.message);
        this.message="";
    }

    getComments(id: number){
        this.commentService.getComments(id,0,50).subscribe(
            comment => this.comments = comment,
            error => console.log(error)
        );

    }

    uploadComment(id: number){
        let author= localStorage.getItem('name');
        console.log("message= "+ this.message);
        console.log("postcomment="+ this.postComment);
        let comment = new Comment(author, this.message)
        console.log(comment);
        this.commentService.uploadComment(this.id, comment).subscribe(
            () =>  this.router.navigate(['/advertisement',this.id]),
            error => console.log(error)
        );
    }

    deleteComment(idComment: number) {
        this.commentService.deleteComment(this.id,idComment).subscribe(
            () => window.location.reload(),
            error => console.log(error)
        );
    }
}