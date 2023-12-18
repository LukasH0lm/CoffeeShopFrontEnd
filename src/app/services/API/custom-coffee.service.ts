import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CustomCoffeeModel } from '../../models/CustomCoffee.model';
import {CreateCustomCoffeeModel} from "../../models/CreateCustomCoffeeCup.model";

@Injectable({
  providedIn: 'root',
})
export class CustomCoffeeService {
  private baseUrl = 'http://localhost:5196/api';

  private customCoffees = this.http.get<CustomCoffeeModel[]>(`${this.baseUrl}/CustomCoffee`);

  constructor(private http: HttpClient) {}

  getCustomCoffees(): Observable<CustomCoffeeModel[]> {
    return this.customCoffees;
  }

  getCustomCoffeeByName(name: string): Observable<CustomCoffeeModel | undefined> {
    return this.customCoffees.pipe(
      map((customCoffees) => customCoffees.find((customCoffee) => customCoffee.name === name))
    );
  }

  saveCustomCoffees(customCoffees: CreateCustomCoffeeModel): Observable<CustomCoffeeModel[]> {
    return this.http.post<CustomCoffeeModel[]>(`${this.baseUrl}/customcoffeecups`, customCoffees);
  }

}
