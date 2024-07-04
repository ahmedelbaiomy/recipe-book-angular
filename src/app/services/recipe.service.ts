import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredients } from '../shared/models/ingredients.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipes:Recipe[] =[
    new Recipe('PASTA','Pasta ’Ncasciata (Sicilian Baked Pasta)','assets/images/products/product5.jpg',
    [
      new Ingredients('Pasta',30),
      new Ingredients('Salsa',20),
      new Ingredients('Oil',10),
    ]
  ),
    new Recipe('CHEESECAKE','Pumpkin Cheesecake With GingersnapCrust','assets/images/products/product1.jpg',
    [
      new Ingredients('Flour',100),
      new Ingredients('milk',90),
      new Ingredients('sugar',30),
    ]
    ),
    new Recipe('SALAD','Italiano Salad Mixed With Avocado Recipe','assets/images/products/product6.jpg',
    [
      new Ingredients('Tomato',100),
      new Ingredients('Cucumber ',100),
      new Ingredients('Capucci',50),
    ]
    ),
    new Recipe('TOASTCAKE','Easy Basic Pancakes Or Toastcake','assets/images/products/product2.jpg',
    [
      new Ingredients('Wheat',100),
      new Ingredients('Milk ',30),
      new Ingredients('sugar',50),
    ]
    ),
    new Recipe('JUICE','Blueberry Juice with Lemon Crema','assets/images/products/product3.jpg',
    [
      new Ingredients('Tomato',100),
      new Ingredients('Cucumber ',100),
      new Ingredients('sugar',50),
    ]
    ),
    new Recipe('JUICE','Soypan Fruits Juice With Any thing','assets/images/products/product8.jpg',
    [
      new Ingredients('Fruits',100),
      new Ingredients('sugar',50),
    ]
    ),
    new Recipe('SALAD','Maxican Dessert With Chicken Cubes','assets/images/products/product7.jpg',
    [
      new Ingredients('Tomato',100),
      new Ingredients('Cucumber ',100),
      new Ingredients('Capucci',50),
    ]
    ),
    new Recipe('Fried EGGS','Fried Eggs With GingersnapCrust','assets/images/products/product4.jpg',
    [
      new Ingredients('Eggs',100),
      new Ingredients('olive oil',50),
    ]
    ),
  ]
  recipeSelected = new EventEmitter<Recipe>();
  recipeChanges = new Subject<Recipe[]>();
  constructor() { }

  getRecipes(){
    return this.recipes;
  }
  setRecipe(recipe:Recipe){
    this.recipeSelected.emit(recipe);
  }
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
}
