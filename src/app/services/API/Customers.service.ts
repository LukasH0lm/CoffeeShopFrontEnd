import { Injectable } from '@angular/core';
import {CustomersModel} from "../../models/Customers.model";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root',
})
export class CustomersService {

  private baseUrl = "http://localhost:5196/api";
  constructor(private http: HttpClient) { }


  //"/customers/add"


  createLogin(customer: CustomersModel | undefined) {
    return this.http.post(this.baseUrl + "/customers/add", customer);
  }






}
