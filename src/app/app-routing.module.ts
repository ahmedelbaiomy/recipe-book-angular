import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { EditRecipeComponent } from './recipes/edit-recipe/edit-recipe.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path:'recipes',
    component:RecipesComponent,
    children: [
      { path: '', component: RecipeListComponent},
      { path: 'new', component: EditRecipeComponent},
      { path: ':id', component: RecipeDetailsComponent},
      { path: ':id/edit', component: EditRecipeComponent}

    ]
  },
  {path:'shopping-list',component:ShoppingListComponent},
  {path:'auth',component:AuthComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
