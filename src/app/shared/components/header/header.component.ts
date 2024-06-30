import { Component, OnDestroy, OnInit} from '@angular/core';
import { AuthService } from './../../../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent  implements OnInit,OnDestroy{
  private userSubscription!: Subscription;
  isAuthenticated = false;
  constructor(private authService:AuthService) {}
  ngOnInit() {
    this.userSubscription = this.authService.user.subscribe(user=>{
      this.isAuthenticated = !user ? false : true;
    })
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
