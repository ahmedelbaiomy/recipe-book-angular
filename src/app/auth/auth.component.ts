import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { IAuthResponse } from '../interfaces/auth.response';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  loginForm:boolean=true;
  isLoading:boolean=false;
  error='';
  constructor(private authService:AuthService) { }

  onSwitchForm(){
    this.loginForm=!this.loginForm;
  }
  onSubmit(form:NgForm){
    if(!form.valid){return;}

    const email = form.value.email;
    const password = form.value.password;

    this.isLoading = true;
    if(this.loginForm){
      this.authService.login({email,password}).subscribe(()=>{

      })
    }else{
      this.authService.register({ email, password }).subscribe({
        next: (data: IAuthResponse) => {
          console.log(data);
          this.isLoading = false;
        },
        error: (err: any) => {
          console.log(err);
          this.isLoading = false;
          this.error = 'An error occured';
        }
      });
    }

  }
}
