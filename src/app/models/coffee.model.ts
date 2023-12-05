import {IngredientsModel} from "./Ingredients.model";

export interface Coffee {
  name: string;
  description: string;
  picture: string;
  ingredients: IngredientsModel[];


}
