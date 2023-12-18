import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root',
})
export class CakesService {

  private baseUrl = "http://localhost:5196/api/Cakes";
  constructor(private http: HttpClient) { }





}
