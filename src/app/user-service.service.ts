import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }
  
  url = 'http://localhost:4200/';
  register(user: User) {
    return this.http.post(`${this.url}/users/register`, user);
  }

}
