import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Comment } from '../entity/comment';



@Injectable()
export class CommentService{
    private urlEndPoint: string = 'https://localhost:8443/api/advertisements/';
    private comment:  Comment[] =[];

    constructor(private http: HttpClient) {}

    private handleError(error: any) {
        console.error(error);
        return Observable.throw('Server error (' + error.status + '): ' + error);
    }

    getComment(id: number): Observable<Comment>{
       return this.http.get<Comment>(this.urlEndPoint + id +'/comments' )
            .pipe(
                map(response => response),
                catchError(error => this.handleError(error))
            );
    }

    uploadComment(comment: Comment): Observable<HttpEvent<{}>>{
        const body = JSON.stringify(comment);
        let formData = new FormData();
        formData.append("author", comment.author);
        formData.append("message",comment.message);
        return
    }
    editComment(comment: Comment){
        return this.http.put(this.urlEndPoint + comment.id, comment)
            .pipe(
                catchError(error => this.handleError(error))
                );
    }
    deleteComment(id: number){
        return this.http.delete<Comment>(this.urlEndPoint +id)
            .pipe(
                catchError(err =>this.handleError(err))
            );

    }
}
