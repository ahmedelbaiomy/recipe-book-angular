import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { IAuthResponse } from '../interfaces/auth.response';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  loginForm:boolean=true;
  isLoading:boolean=false;
  error='';
  constructor(private authService:AuthService,private route:Router) { }

  onSwitchForm(){
    this.loginForm=!this.loginForm;
  }
  onSubmit(form:NgForm){
    if(!form.valid){return;}

    const email = form.value.email;
    const password = form.value.password;
    let authObs:Observable<IAuthResponse>;
    this.isLoading = true;
    if(this.loginForm){
      authObs=this.authService.login({email,password});
    }else{
      authObs= this.authService.register({ email, password });
    }

    authObs.subscribe({
      next: (data: IAuthResponse) => {
        this.isLoading = false;
        console.log(data);
        this.route.navigate(['/recipes']);
      },
      error: (err: any) => {
        this.isLoading=false;
        this.error = err;
        console.log(err)
      }
    })

  }
}
