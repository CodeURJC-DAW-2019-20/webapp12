import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent, HttpRequest } from '@angular/common/http';
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

    getComments(id: number,page: number, quantity: number): Observable<Comment[]>{
       return this.http.get<Comment[]>(this.urlEndPoint + id +'/comments'+ "?page="+page+"&number="+quantity)
            .pipe(
                map(response => response),
                catchError(error => this.handleError(error))
            );
    }

    uploadComment(id: number,comment: Comment): Observable<HttpEvent<{}>>{
        const body = JSON.stringify(comment);
        console.log(body);
        let formData = new FormData();
        formData.append("author", comment.author);
        formData.append("message",comment.message);
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        const req = new HttpRequest('POST', this.urlEndPoint+id+"/comments", body, {headers,
            reportProgress: true
            });
            
            return this.http.request(req); 
    }

    editComment(comment: Comment){
        return this.http.put(this.urlEndPoint + comment.id, comment)
            .pipe(
                catchError(error => this.handleError(error))
                );
    }
    deleteComment(id: number, idComment: number){
        return this.http.delete<Comment>(this.urlEndPoint +id + "/comments/"+ idComment)
            .pipe(
                catchError(err =>this.handleError(err))
            );

    }
}