import {IngredientsModel} from "./Ingredients.model";

export interface CustomCoffeeModel {

  itemId: string;
  UserId: string;
  name: string;
  size: number;
  itemType: number;
  description: string;
  price: number;
  image: string;
  storeIds: string[];
  ingredients: IngredientsModel[];


}
