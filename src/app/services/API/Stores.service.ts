import { Injectable } from '@angular/core';
import {StoresModel} from "../../models/Stores.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root',
})
export class StoresService {

  private baseUrl = "http://localhost:5196/api";
  constructor(private http: HttpClient) { }




  getStores(): Observable<StoresModel[]> {

    return this.http.get<StoresModel[]>(this.baseUrl + "/stores");

  }

  getStoreIdByName(stores: StoresModel[], storeName: string): string | undefined {
    return stores.find((stores) => stores.name === storeName)?.storeId;
  }








}
