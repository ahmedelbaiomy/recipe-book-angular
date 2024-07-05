import { Component, OnDestroy, OnInit} from '@angular/core';
import { AuthService } from './../../../services/auth.service';
import { Subscription } from 'rxjs';
import { DatastorageService } from './../../../services/datastorage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent  implements OnInit,OnDestroy{
  private userSubscription!: Subscription;
  isAuthenticated = false;
  constructor(private authService:AuthService,private dataStorage:DatastorageService) {}
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

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
