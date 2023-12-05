import { Injectable } from '@angular/core';
import {CakesModel} from "../../models/Cakes.model";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root',
})
export class CakesService {

  private baseUrl = "http://localhost:5196/api/Cakes";
  constructor(private http: HttpClient) { }



  // Midlertidig data indtil api virker :)
  private cakes: CakesModel[] = [

  ];



  getCakes(): CakesModel[] {
    return this.cakes;
  }

  getCakeById(id: number) {
    return this.cakes.find((cakes) => cakes.ItemId === id);
  }


}
