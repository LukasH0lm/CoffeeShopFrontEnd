import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {CustomersService} from "../services/API/Customers.service";
import {CustomersModel} from "../models/Customers.model";
import {FormsModule} from "@angular/forms";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {Observable} from "rxjs";
import {CurrentUserService} from "../services/currentUser.service";

@Component({
  selector: 'app-log-ind-page',
  standalone: true,
  imports: [CommonModule, MatButtonModule, RouterLink, FormsModule, MatCheckboxModule],
  templateUrl: './log-ind-page.component.html',
  styleUrl: './log-ind-page.component.css'
})
export class LogIndPageComponent {

  emailTextField: string = "";
  passwordTextField: string = "";
  rememberMeCheckbox: boolean = false;



 constructor(private customerService: CustomersService, private currentUserService: CurrentUserService) {


 }

 async login() {

   if (await this.customerService.checkLoginResponse(this.emailTextField, this.passwordTextField)) {
     console.log("Login successful");

     // Get Customer from API WITH MAIL
   //   const customer : Observable<CustomersModel> = this.customerService.getCustomerByEmail(this.emailTextField);
    //  console.log(customer)

     // Set current customer to customer from API.
    //  this.currentUserService.setCurrentUser(customer);


     if (this.rememberMeCheckbox) {
        console.log("Remember me checked");
       //Store Customer in cookie.
     }

      // Update user logo in header.

      // Text that says login successful.

   } else {
     console.log("Login failed");
     // Some text that says login failed.
   }

 }





 }
