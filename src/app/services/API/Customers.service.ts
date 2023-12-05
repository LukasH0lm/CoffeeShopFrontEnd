import { Injectable } from '@angular/core';
import {CustomersModel} from "../../models/Customers.model";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root',
})
export class CustomersService {

  private baseUrl = "http://localhost:5196/api/Customers";
  constructor(private http: HttpClient) { }



  // Midlertidig data indtil api virker :)
  private customers: CustomersModel[] = [

  ];



  getCustomers(): CustomersModel[] {
    return this.customers;
  }

  getCustomerById(id: number) {
    return this.customers.find((customers) => customers.CustomerId === id);
  }


}
