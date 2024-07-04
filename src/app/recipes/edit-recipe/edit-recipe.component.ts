import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Ingredients } from '../../shared/models/ingredients.model';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrl: './edit-recipe.component.scss'
})
export class EditRecipeComponent implements OnInit{
  id!:number;
  editMode = false;
  recipeForm!:FormGroup;
  constructor(private activatedRoute:ActivatedRoute,private recipeService:RecipeService,private router:Router){}


  initForm(){
    let recipeName:any='';
    let recipeImage:any='';
    let recipeDescription:any='';
    let recipeIngredients:any= new FormArray([]);

    if(this.editMode){
      const recipe = this.recipeService.getRecipeById(this.id);
      if(recipe){
        recipeName=recipe.name;
        recipeImage=recipe.imagePath;
        recipeDescription = recipe.description;
        if(recipe.ingerdients.length > 0){
          for(let ingredient of recipe.ingerdients){
            recipeIngredients.push(new FormGroup({
              name:new FormControl(ingredient.name,Validators.required),
              amount:new FormControl(ingredient.amount,Validators.required)
            }))
          }
        }
      }
    }

    this.recipeForm = new FormGroup({
      name:new FormControl(recipeName,Validators.required),
      description:new FormControl(recipeDescription,Validators.required),
      imagePath:new FormControl(recipeImage,Validators.required),
      ingredients:recipeIngredients
    })

  }

  get ingredientsControl(){
    return (<FormArray>(this.recipeForm.get('ingredients'))).controls
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:Params)=>{
      this.id = +params['id'];
      this.editMode = params['id'] != null;
    })
    this.initForm();
  }

  onAddIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
      name:new FormControl('',Validators.required),
      amount:new FormControl('',[Validators.required,Validators.min(1)])
    }))
  }

  onSubmit(){
    if(this.editMode){
      this.recipeService.updateRecipe(this.id,this.recipeForm.value)
    }else{
      this.recipeService.addRecipe(this.recipeForm.value)
    }
    this.router.navigate(['recipes'])

  }

  onCancel(){
    this.router.navigate(['../'],{relativeTo:this.activatedRoute})
  }
  onDeleteIngredient(index:number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index)
  }
}
