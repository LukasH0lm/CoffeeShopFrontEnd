import { Injectable } from '@angular/core';
import {OrdersModel} from "../../models/Orders.model";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";


@Injectable({
  providedIn: 'root',
})
export class OrdersService {

  private baseUrl = "http://localhost:5196/api/orders/";
  private orders = this.http.get<any[]>(this.baseUrl);
  constructor(private http: HttpClient) { }


  postOrder(order: OrdersModel) {
    return this.http.post(this.baseUrl , order);
  }

  getPendingOrders(): Observable<any[]> {

    console.log("getPendingOrders");
    console.log(this.orders)

    return this.orders.pipe(
      map(orders => orders.filter(order => !order.isAccepted))
    );

  }
  checkOrder(orderId: string): Observable<boolean> {

    return this.http.get<any>(this.baseUrl + orderId).pipe(
      map(order => order.isAccepted)

    );
  }




  acceptOrder(orderId: string): Observable<any> {
    console.log("acceptOrder:" + orderId)
    const url = `${this.baseUrl}${orderId}/accept`;

    // Send a PUT request to the server to accept the order
    return this.http.put(url, {}).pipe(
      // Handle the response as needed
    );
  }

  deleteOrder(orderId: string): Observable<any> {
    const url = `${this.baseUrl}${orderId}`;

    // Send a DELETE request to the server to delete the order
    return this.http.delete(url).pipe(
      // Handle the response as needed
    );
  }




}
