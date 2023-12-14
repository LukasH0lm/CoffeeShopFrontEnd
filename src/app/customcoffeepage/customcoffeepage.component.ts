import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {IngredientsService} from "../services/API/Ingredients.service";
import {IngredientsModel} from "../models/Ingredients.model";
import {Observable} from "rxjs";
import {CoffeeCupsModel} from "../models/CoffeeCups.model";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-customcoffeepage',
  standalone: true,
  imports: [CommonModule, MatCheckboxModule, FormsModule, MatInputModule, MatSelectModule, MatButtonModule],
  templateUrl: './customcoffeepage.component.html',
  styleUrl: './customcoffeepage.component.css'
})


export class CustomcoffeepageComponent implements OnInit {


  customCoffeeIngredients: Observable<IngredientsModel[]> | undefined;




  constructor(private ingredientsService: IngredientsService) {


  }

  ngOnInit(): void {
    this.customCoffeeIngredients = this.ingredientsService.getIngredients();
  }












}










