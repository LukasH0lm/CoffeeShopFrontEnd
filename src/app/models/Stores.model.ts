import {BrandsModel} from "./Brands.model";
import {OrdersModel} from "./Orders.model";

export interface StoresModel {

  storeId: number;
  name: string;
  brandId: number;
  brand: BrandsModel | null;
  orders: OrdersModel[] | null;


}
