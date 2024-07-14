import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesComponent } from '../recipes.component';
import { RecipeDetailsComponent } from '../recipe-details/recipe-details.component';
import { RecipeItemComponent } from '../recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from '../recipe-list/recipe-list.component';
import { EditRecipeComponent } from '../edit-recipe/edit-recipe.component';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    RecipesComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
    RecipeListComponent,
    EditRecipeComponent
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [
    RecipesComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
    RecipeListComponent,
    EditRecipeComponent
  ]
})
export class RecipesModule { }
