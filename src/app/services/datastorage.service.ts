import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeService } from './recipe.service';
import { Recipe } from './../recipes/recipe.model';
import { BehaviorSubject, exhaustAll, exhaustMap, map, take } from 'rxjs';
import { AuthService } from './auth.service';
import { User } from '../auth/user.model';

@Injectable({
  providedIn: 'root'
})
export class DatastorageService {

  user = new BehaviorSubject<User>({_token:"",_tokenExpirationDate:new Date(),email:"",id:"",token:""});

  constructor(private http:HttpClient,private recipeService:RecipeService,private authService:AuthService) { }


  storeRecipes(){
    const recipes = this.recipeService.getRecipes();
    this.http.post('https://http-demo-10572-default-rtdb.firebaseio.com/recipes.json',recipes).subscribe({
      next:(res) => {
        console.log(res)
      }
    })
  }

  fetchRecipes(){
    return this.authService.user.pipe(
      take(1),
      exhaustMap(user=>{
        return this.http.get<{[key:string]:Recipe[]}>('https://http-demo-10572-default-rtdb.firebaseio.com/recipes.json').pipe(
          map((responseData:{[key:string]:Recipe[]})=>{
            const recipesArray:Recipe[]=[];
            for(let key in responseData){
              if(responseData.hasOwnProperty(key)){
                recipesArray.push(...responseData[key])
              }
            }
            return recipesArray;
          }))
      })
    ).subscribe({
      next:(recipes)=>{
        this.recipeService.setRecipe(recipes)
      }
    });



  }
}
