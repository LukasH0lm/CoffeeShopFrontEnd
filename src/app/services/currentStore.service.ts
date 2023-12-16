import {Injectable} from '@angular/core';
import {CookiesService} from "./cookies.service";
import {StoresModel} from "../models/Stores.model";




@Injectable({
  providedIn: 'root',
})
export class CurrentStoreService {

  currentStore: StoresModel | undefined = {
    storeId: "",
    name: ""
  };



  constructor(private cookiesService: CookiesService) {

    this.loadStoreFromCookies();
  }



  loadStoreFromCookies() {

    const currentStoreCookie = this.cookiesService.getCookie("currentStore");

    if (currentStoreCookie) {
      console.log("currentStoreCookieSaved: ", currentStoreCookie)
      this.currentStore = JSON.parse(currentStoreCookie);
    }else
    {
      console.log("No currentStoreCookie found")
    }
  }




  setCurrentStore(store: StoresModel | undefined): void {
    this.currentStore = {
      storeId: store?.storeId ?? "",
      name: store?.name ?? ""
    };


    this.cookiesService.setCookieForSevenDays("currentStore", JSON.stringify(this.currentStore));

  }

  getCurrentStore() {
    return this.currentStore;
  }

  clearCurrentStore() {
    this.currentStore = undefined;
    this.cookiesService.deleteCookie("currentStore");
  }










}
