import { Injectable } from '@angular/core';
import {OrdersModel} from "../../models/Orders.model";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root',
})
export class OrdersService {

  private baseUrl = "http://localhost:5196/api/Orders";
  constructor(private http: HttpClient) { }



  // Midlertidig data indtil api virker :)
  private orders: OrdersModel[] = [

  ];



  getOrders(): OrdersModel[] {
    return this.orders;
  }

  getOrdersById(id: number) {
    return this.orders.find((orders) => orders.OrderId === id);
  }


}
