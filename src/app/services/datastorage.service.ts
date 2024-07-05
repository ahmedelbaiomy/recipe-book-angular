import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeService } from './recipe.service';
import { Recipe } from './../recipes/recipe.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatastorageService {

  constructor(private http:HttpClient,private recipeService:RecipeService) { }


  storeRecipes(){
    const recipes = this.recipeService.getRecipes();
    this.http.post('https://http-demo-10572-default-rtdb.firebaseio.com/recipes.json',recipes).subscribe({
      next:(res) => {
        console.log(res)
      }
    })
  }

  fetchRecipes(){
    this.http.get<{[key:string]:Recipe[]}>('https://http-demo-10572-default-rtdb.firebaseio.com/recipes.json').pipe(
      map((responseData:{[key:string]:Recipe[]})=>{
        const recipesArray:Recipe[]=[];
        for(let key in responseData){
          if(responseData.hasOwnProperty(key)){
            recipesArray.push(...responseData[key])
          }
        }
        this.recipeService.setRecipe(recipesArray)
        return recipesArray;
      })).subscribe();
  }
}
