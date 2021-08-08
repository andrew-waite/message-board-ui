import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User';
import { MessageBoardHttpClient } from './utils/MessageBoardHttpClient';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: MessageBoardHttpClient) { }

  getUser(id: number): Observable<User> {
    return this.http.get("/profile/" + id);
  }
}
