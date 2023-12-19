import {ItemModel} from "./Item.model";

export interface BasketItemModel {
  item: ItemModel;
  quantity: number;
  subTotal: number;
}
