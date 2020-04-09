import { Injectable } from '@angular/core';
import {catchError, map, switchAll} from "rxjs/operators";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders, HttpEvent, HttpRequest} from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Blog } from '../entity/blog';

const BASE_URL= environment.baseUrl;

const GET_BLOG = BASE_URL + "/blogs/";
const DELETE_BLOG = BASE_URL + "/concept/";
const CREATE_BLOG = BASE_URL + "/concept/";



@Injectable()
export class BlogService{
    private urlEndPoint: string = 'https://localhost:8443/api/blogs/';

    constructor(private http: HttpClient) {}

    private handleError(error: any) {
        console.error(error);
        return Observable.throw('Server error (' + error.status + '): ' + error.text());
    }


    getBlog(id: number | string) {
        return this.http.get(GET_BLOG + id , { withCredentials: true })
            .pipe(
                map(response => response),
                catchError(error => this.handleError(error))
            );
    }

    addAdvertisement(blog: Blog, id:number):Observable<Blog> {
        const body = JSON.stringify(blog);

        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        return this.http.post<Blog>(CREATE_BLOG + id, body, {headers})
            .pipe(
                map(response => response),
                catchError(error => this.handleError(error))
            );

    }
}

