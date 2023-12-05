import { Injectable } from '@angular/core';
import {OrderDetailsModel} from "../../models/OrderDetails.model";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root',
})
export class OrderDetailsService {

  private baseUrl = "http://localhost:5196/api/OrderDetails";
  constructor(private http: HttpClient) { }



  // Midlertidig data indtil api virker :)
  private orderDetails: OrderDetailsModel[] = [

  ];



  getOrderDetails(): OrderDetailsModel[] {
    return this.orderDetails;
  }

  getOrderDetailsById(id: number) {
    return this.orderDetails.find((orderDetails) => orderDetails.OrderDetailId === id);
  }


}
