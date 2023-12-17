import { Injectable } from '@angular/core';
import {OrdersModel} from "../../models/Orders.model";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";


@Injectable({
  providedIn: 'root',
})
export class OrdersService {

  private baseUrl = "http://localhost:5196/api/orders/";
  constructor(private http: HttpClient) { }


  postOrder(order: OrdersModel) {
    return this.http.post(this.baseUrl , order);
  }

  checkOrder(orderId: string): Observable<boolean> {

    return this.http.get<any>(this.baseUrl + orderId).pipe(
      map(order => order.isAccepted)

    );
  }










}
