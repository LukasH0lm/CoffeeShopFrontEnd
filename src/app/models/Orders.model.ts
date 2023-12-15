import {OrderDetailsModel} from "./OrderDetails.model";

export interface OrdersModel {
  storeId: string;
  userId: string;
  totalAmount: number;
  orderDetails: OrderDetailsModel[];

}
