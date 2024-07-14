import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from '../recipes.component';
import { RecipeListComponent } from '../recipe-list/recipe-list.component';
import { EditRecipeComponent } from '../edit-recipe/edit-recipe.component';
import { RecipeDetailsComponent } from '../recipe-details/recipe-details.component';

const routes: Routes = [
    {
      path:'',
      component:RecipesComponent,
      children: [
        { path: '', component: RecipeListComponent},
        { path: 'new', component: EditRecipeComponent},
        { path: ':id', component: RecipeDetailsComponent},
        { path: ':id/edit', component: EditRecipeComponent}

      ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
