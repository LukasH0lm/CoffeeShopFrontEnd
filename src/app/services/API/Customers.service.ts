import { Injectable } from '@angular/core';
import {CustomersModel} from "../../models/Customers.model";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root',
})
export class CustomersService {

  private baseUrl = "http://localhost:5196/api";
  constructor(private http: HttpClient) { }



  createLogin(customer: CustomersModel | undefined) {
    return this.http.post(this.baseUrl + "/customers/add", customer);
  }

  getCustomerByEmail(email: string) {
    return this.http.get(this.baseUrl + "/customers/email" + email);
  }

  async checkLoginResponse(email: string, password: string): Promise<boolean> {

    const credentials = {email, password};


    const response = await fetch("http://localhost:5196/api/customers/verify-password", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    });

    if (response.status >= 400) {

      return false;
    }

    if (response.status === 200) {

      return true;
    }

    return false;
  }





}
