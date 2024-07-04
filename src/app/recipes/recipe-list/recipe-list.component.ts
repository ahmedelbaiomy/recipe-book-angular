import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../services/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss'
})
export class RecipeListComponent implements OnInit{
  recipes:Recipe[] =[]

  constructor(private recipeService:RecipeService, private router:Router, private activatedRoute:ActivatedRoute) {

  }
  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.recipeService.recipeChanges.subscribe((recipes:Recipe[])=>{
      this.recipes = recipes;
    })
  }

  onNewRecipe(){
    this.router.navigate(["new"],{relativeTo:this.activatedRoute})
  }
}
