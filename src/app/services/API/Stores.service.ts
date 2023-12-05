import { Injectable } from '@angular/core';
import {StoresModel} from "../../models/Stores.model";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root',
})
export class StoresService {

  private baseUrl = "http://localhost:5196/api/Stores";
  constructor(private http: HttpClient) { }



  // Midlertidig data indtil api virker :)
  private stores: StoresModel[] = [
    { Name: 'Espressia-Eksklusivo', StoreId: 1, BrandId: 1 },
    { Name: 'AromaÆstetik', StoreId: 2, BrandId: 2 },
    { Name: 'BaristaMaestro', StoreId: 3, BrandId: 3 },

  ];



  getStores(): StoresModel[] {
    return this.stores;
  }

  getStoreById(id: number) {
    return this.stores.find((stores) => stores.StoreId === id);
  }


}
