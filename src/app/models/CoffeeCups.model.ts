import {IngredientsModel} from "./Ingredients.model";

export interface CoffeeCupsModel {

  itemId: string;
  name: string;
  size : number;
  itemType: number;
  description: string;
  price: number;
  image: string;
  storeId: string;
  ingredients: IngredientsModel[];






}
