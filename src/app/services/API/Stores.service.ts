import { Injectable } from '@angular/core';
import {StoresModel} from "../../models/Stores.model";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root',
})
export class StoresService {

  private baseUrl = "http://localhost:5196/api";
  constructor(private http: HttpClient) { }


  stores: StoresModel[] = [];

  getStores() {
    this.http.get<StoresModel[]>(this.baseUrl + "/stores").subscribe((stores) => {
      this.stores = stores;
      console.log(this.stores);
    });
    return this.stores;

  }






}
