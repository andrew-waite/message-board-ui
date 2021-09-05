import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User';
import { MessageBoardHttpClient } from './utils/MessageBoardHttpClient';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: MessageBoardHttpClient) { }

  submitLoginDetails(email: String): Observable<User> {
    const body = { "email": email };
    return this.http.post<User>("/profile/", body);
  }
}
