import {OrderDetailsModel} from "./OrderDetails.model";

export interface OrdersModel {
  orderId: string;
  storeId: string;
  userId: string;
  totalAmount: number;
  orderDetails: OrderDetailsModel[];

}
