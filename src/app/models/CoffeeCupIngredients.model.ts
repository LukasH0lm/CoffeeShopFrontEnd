import {CoffeeCupsModel} from "./CoffeeCups.model";
import {IngredientsModel} from "./Ingredients.model";

export interface CoffeeCupIngredientsModel {
  coffeeCupId: string;
  coffeeCup: CoffeeCupsModel[];
  ingredientId: string;
  ingredient: IngredientsModel[];
  quantity: number;

}
