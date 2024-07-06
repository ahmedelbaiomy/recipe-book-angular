import { Injectable } from '@angular/core';
import { IAuthRequest } from '../interfaces/auth.request';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IAuthResponse } from '../interfaces/auth.response';
import { BehaviorSubject, Subject, catchError, tap, throwError } from 'rxjs';
import { User } from '../auth/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  user = new BehaviorSubject<User | null>(null);
  register(data:IAuthRequest){
    return this.http.post<IAuthResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAdBzwMNzITz1J3Gqj3J-aFHU-6ok9HHQs",
     {email:data.email,
      password:data.password,
      returnSecureToken:true
  }).pipe(catchError(this.handleError), tap(responseData =>{
    this.handleAuthentication(responseData.email,responseData.localId,responseData.idToken,+responseData.expiresIn);
  }))
}

  login(data:IAuthRequest){
    return this.http.post<IAuthResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAdBzwMNzITz1J3Gqj3J-aFHU-6ok9HHQs",{
      email:data.email,
      password:data.password,
      returnSecureToken:true
    }).pipe(catchError(this.handleError), tap(responseData =>{
      this.handleAuthentication(responseData.email,responseData.localId,responseData.idToken,+responseData.expiresIn);
    }))
  }

  logout(){
    this.user.next(null);
  }

  private handleError(errorResponse:HttpErrorResponse){
    let errorMsg = 'An unknown error';
    if(!errorResponse.error || !errorResponse.error.error){
      return throwError(()=>errorMsg);
    }
    switch(errorResponse.error.error.message){
      case 'EMAIL_EXISTS':
        errorMsg = 'An email already exists';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMsg = 'Email not found';
        break;
      case 'INVALID_PASSWORD':
        errorMsg = 'Invalid password';
        break;
    }
    return throwError(()=>errorMsg);
  }

  private handleAuthentication(email:string,userId:string,token:string,expiresIn:number){
    const expirationDate = new Date(new Date().getTime() + +expiresIn*1000);

    const user = new User(
      email,
      userId,
      token,
      expirationDate
    )
    this.user.next(user);
  }
}
