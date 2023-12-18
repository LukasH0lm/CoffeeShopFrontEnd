import {CreateIngredientsModel} from "./CreateIngredients.model";

export interface CreateCustomCoffeeModel {

  UserId: string;
  name: string;
  itemType: number;
  description: string;
  price: number;
  image: string;
  storeIds: string[];
  ingredients: CreateIngredientsModel[];






}
