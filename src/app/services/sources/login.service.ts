import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageBoardHttpClient } from './utils/MessageBoardHttpClient';
import { throwError } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';
import { User } from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: MessageBoardHttpClient) { }

  submitLoginDetails(email: String): Promise<User> {
    let body = {email: email};
    return this.http.post<User>("/profile/login", body);
  }
}
