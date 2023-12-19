import {Injectable} from '@angular/core';
import {ItemModel} from "../../models/Item.model";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root',
})
export class ItemService {

  private baseUrl = "http://localhost:5196/api/Item";

  constructor(private http: HttpClient) {
  }


}
