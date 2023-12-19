import {Injectable} from '@angular/core';
import {BrandsModel} from "../../models/Brands.model";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root',
})
export class BrandsService {

  private baseUrl = "http://localhost:5196/api/Brand";

  constructor(private http: HttpClient) {
  }


  // Midlertidig data indtil api virker :)
  private brands: BrandsModel[] = [
    {Name: 'Espressia-Eksklusivo', BrandId: 1},
    {Name: 'AromaÆstetik', BrandId: 2},
    {Name: 'BaristaMaestro', BrandId: 3},
  ];


  getBrands(): BrandsModel[] {
    return this.brands;
  }

  getBrandByName(name: string) {
    return this.brands.find((brands) => brands.Name === name);
  }


}
