import { Component, OnDestroy, OnInit} from '@angular/core';
import { AuthService } from './../../../services/auth.service';
import { Subscription } from 'rxjs';
import { DatastorageService } from './../../../services/datastorage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent  implements OnInit,OnDestroy{
  private userSubscription!: Subscription;
  isAuthenticated = false;
  constructor(private authService:AuthService,private dataStorage:DatastorageService, private router:Router) {}
  ngOnInit() {
    this.userSubscription = this.authService.user.subscribe(user=>{
      this.isAuthenticated = !user ? false : true;
    })
  }

  onSaveData(){
    this.dataStorage.storeRecipes();
  }

  onFetchData(){
    this.dataStorage.fetchRecipes();
  }
  onLogout(){
    this.isAuthenticated=false;
    this.authService.logout();
    this.router.navigate(['/auth'])
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
