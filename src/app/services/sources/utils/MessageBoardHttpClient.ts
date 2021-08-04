import { Injectable } from "@angular/core";
import { HttpClient, HttpHandler } from "@angular/common/http"
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MessageBoardHttpClient extends HttpClient { 
    BASE_URL = "http://localhost:7000/api/";
    
    constructor(handler: HttpHandler) {
        super(handler);
    }

    get(url: string): Observable<any> {
        return super.get(this.BASE_URL + url);
    }
}