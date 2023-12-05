import { Injectable } from '@angular/core';
import {ItemModel} from "../../models/Item.model";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root',
})
export class ItemService {

  private baseUrl = "http://localhost:5196/api/Item";
  constructor(private http: HttpClient) { }



  // Midlertidig data indtil api virker :)
  private item: ItemModel[] = [

  ];



  getItems(): ItemModel[] {
    return this.item;
  }

  getItemById(id: number) {
    return this.item.find((item) => item.ItemId === id);
  }


}
