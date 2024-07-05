import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredients } from '../shared/models/ingredients.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipes:Recipe[] =[];
  recipeSelected = new EventEmitter<Recipe>();
  recipeChanges = new Subject<Recipe[]>();
  constructor() { }

  getRecipes(){
    return this.recipes;
  }
  // setRecipe(recipe:Recipe){
  //   this.recipeSelected.emit(recipe);
  // }
  getRecipeById(id:number){
    return this.recipes[id];
  }

  addRecipe(recipe:Recipe){
    this.recipes.push(recipe)
    this.recipeChanges.next(this.recipes)
  }

  updateRecipe(index:number,newRecipe:Recipe){
    this.recipes[index] = newRecipe;
    this.recipeChanges.next(this.recipes)

  }

  deleteRecipe(index:number){
    this.recipes.splice(index,1)
    this.recipeChanges.next(this.recipes)
  }

  setRecipe(recipes:Recipe[]){
    this.recipes = recipes;
    this.recipeChanges.next(this.recipes)
  }
}
