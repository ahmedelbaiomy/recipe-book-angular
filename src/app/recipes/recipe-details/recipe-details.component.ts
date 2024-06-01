import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../services/shopping-list.service';
import { Ingredients } from '../../shared/models/ingredients.model';
import { RecipeService } from './../../services/recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.scss'
})
export class RecipeDetailsComponent implements OnInit{
  recipeDetails!:Recipe;
  latestRecipes:Recipe[]=[];
  constructor(private shoppingListService:ShoppingListService,private activatedRoute:ActivatedRoute,private recipeService:RecipeService){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:Params)=>{
      this.recipeDetails = this.recipeService.getRecipeById(+params['id'])
    })

    this.latestRecipes = this.recipeService.getRecipes();

  }
  addToShoppingList(ingredients:Ingredients[]){
    this.shoppingListService.addIngredients(ingredients);
  }
}
