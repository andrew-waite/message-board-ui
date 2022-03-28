import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHandler } from "@angular/common/http"
import { Observable, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MessageBoardHttpClient { 
    BASE_URL = "http://localhost:4200/api";
    private httpClient: HttpClient;
    
    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    get(url: string): Observable<any> {
        return this.httpClient.get(this.buildUrl(url));
    }

    post<T>(url: string, body?: any): Promise<T> {
        var response = this.httpClient.post<T>(this.buildUrl(url), body).toPromise();

        response.catch((error: HttpErrorResponse) => {
            throwError(error);
        });

        return response;
    }

    private buildUrl(requestedPath: string) : string{
        return this.BASE_URL + requestedPath;
    }
}