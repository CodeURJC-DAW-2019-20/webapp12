import { Component, ViewChild, ElementRef } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
import { CommentService } from './service/comment.service';
import {Comment} from './entity/comment';


@Component({
    selector: 'commentMessage',
    templateUrl: './comment.component.html',

})
export class commentComponent {

    
    comment : Comment;
    message= "";
    postComment=[];
    isLogged : boolean= false;

    constructor(private router: Router, activatedRoute: ActivatedRoute, private commentService: CommentService) {
        let id = activatedRoute.snapshot.params['id'];
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
        this.commentService.getComment(id).subscribe(
            comment => this.comment = comment,
            error => console.log(error)  
        );

    }


}