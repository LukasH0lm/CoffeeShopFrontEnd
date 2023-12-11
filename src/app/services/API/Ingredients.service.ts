import { Injectable } from '@angular/core';
import {IngredientsModel} from "../../models/Ingredients.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root',
})
export class IngredientsService {

  private baseUrl = "http://localhost:5196/api";
  constructor(private http: HttpClient) { }







}
