import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {UsersService} from "../services/API/Users.service";
import {UserModel} from "../models/User.model";
import {FormsModule} from "@angular/forms";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {CurrentUserService} from "../services/currentUser.service";
import {CookiesService} from "../services/cookies.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import { Location } from '@angular/common';


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




 constructor(private customerService: UsersService, private currentUserService: CurrentUserService,
             private cookiesService: CookiesService, private snackBar: MatSnackBar, private location: Location) {


 }


  openSnackBarSuccess() {
    this.snackBar.open('Successfully logged in', 'Close', {
      duration: 5000,

    });
  }

  openSnackBarFailed() {
    this.snackBar.open('Login Failed. Try again!', 'Close', {
      duration: 5000,
    });
  }


 async login() {

   if (await this.customerService.checkLoginResponse(this.emailTextField, this.passwordTextField)) {
     console.log("Login successful");

     const customer: UserModel | undefined = await this.customerService.getUserByEmail(this.emailTextField).toPromise();

      console.log("customer: ", customer);


     // Set current customer to customer from API.
     this.currentUserService.setCurrentUser(customer);
     console.log("setting currentUser")



     if (this.rememberMeCheckbox) {
        console.log("Remember me checked");
        this.cookiesService.setCookieForSevenDays("huskMig", JSON.stringify(customer));
        console.log("setting cookie")

     }



     // Navigate to previous page.
     this.location.back();

     this.openSnackBarSuccess();

     this.currentUserService.updateLoginStatus();
     this.currentUserService.updateCurrentUserName();



   } else {
     console.log("Login failed");
    this.openSnackBarFailed();

   }

 }


 }
