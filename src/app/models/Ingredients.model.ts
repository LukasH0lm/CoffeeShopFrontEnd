import {MeasurementUnit} from "../enum/measurementUnit.enum";


export interface IngredientsModel {
  ingredientId: string;
  name: string;
  price: number;
  measurementUnit: MeasurementUnit;
//  checked: boolean;
}
