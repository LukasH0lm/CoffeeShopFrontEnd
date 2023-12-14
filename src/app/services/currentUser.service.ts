
import { Injectable } from '@angular/core';
import {CoffeeCupsModel} from "../models/CoffeeCups.model";
import {CoffeeCupsService} from "./API/CoffeeCups.service";
import {Observable} from "rxjs";
import {CustomersModel} from "../models/Customers.model";
import {CookiesService} from "./cookies.service";

@Injectable({
  providedIn: 'root',
})
export class CurrentUserService {

  currentUser: CustomersModel | undefined;

  constructor(private cookiesService: CookiesService) {

  }

    setCurrentUser(user: CustomersModel): void {
    this.currentUser = user;
    this.cookiesService.setCookie("currentUser", JSON.stringify(user));
    }

    getCurrentUser() {
    return this.currentUser;

    }

    getCurrentUserFromCookies() {
    const currentUserCookie = this.cookiesService.getCookie("currentUser");
    }


    clearCurrentUser() {
    this.currentUser = undefined;
    this.cookiesService.deleteCookie("currentUser");
    }

}
