import { Ingredients } from "../shared/models/ingredients.model";

export class Recipe{
  public name!:string;
  public description!:string;
  public imagePath!:string;
  public ingerdients!:Ingredients[];
  constructor(name:string,description:string,imagePath:string,ingerdients:Ingredients[]){
    this.name=name;
    this.description=description;
    this.imagePath = imagePath;
    this.ingerdients = ingerdients;
  }
}
