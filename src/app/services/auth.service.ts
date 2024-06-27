import { Injectable } from '@angular/core';
import { IAuthRequest } from '../interfaces/auth.request';
import { HttpClient } from '@angular/common/http';
import { IAuthResponse } from '../interfaces/auth.response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  register(data:IAuthRequest){
    return this.http.post<IAuthResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAdBzwMNzITz1J3Gqj3J-aFHU-6ok9HHQs",
     {email:data.email,
      password:data.password,
      returnSecureToken:true
  });

  }

  login(data:IAuthRequest){
    return this.http.post<IAuthResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAdBzwMNzITz1J3Gqj3J-aFHU-6ok9HHQs",data);

  }
}
