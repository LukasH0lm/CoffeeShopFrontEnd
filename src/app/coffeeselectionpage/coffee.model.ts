import {CoffeeIngredient} from "./ingredient.model";

export interface Coffee {
  name: string;
  description: string;
  picture: string;
  ingredients: CoffeeIngredient[];


}
