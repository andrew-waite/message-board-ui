import { Injectable } from '@angular/core';
import { MessageBoardHttpClient } from './utils/MessageBoardHttpClient';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: MessageBoardHttpClient) { }

  getUser(id: number): string {
    var firstName = "";
  
    this.http.get("profile/5").subscribe(data => {
      firstName = data.firstName;
    })

    return firstName;
  }
}
