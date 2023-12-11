import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import {Coffee} from "../models/coffee.model";
import {ActivatedRoute, Router} from "@angular/router";
import {CoffeeService} from "../services/premadeCoffeeService";
import {CurrentCoffeeService} from "../services/currentcoffee.service";
import {CoffeeCupsModel} from "../models/CoffeeCups.model";
import {CoffeeCupsService} from "../services/API/CoffeeCups.service";
import {forkJoin, Observable} from "rxjs";
import {StoresService} from "../services/API/Stores.service";
import {StoresModel} from "../models/Stores.model";


@Component({
  selector: 'app-coffeeselectionpage',
  standalone: true,
  imports: [CommonModule, MatGridListModule],
  templateUrl: './coffeeselectionpage.component.html',
  styleUrl: './coffeeselectionpage.component.css'
})
export class CoffeeselectionpageComponent implements OnInit{

  coffeesCups: CoffeeCupsModel[] = [];
  premadeCoffeeCups: CoffeeCupsModel | any;
  premadeCoffeeCupsByStore: CoffeeCupsModel | any;
  stores : StoresModel[] = [];
  companyName: string;
  currentStoreId: string | undefined;

  constructor(private currentCoffeeService: CurrentCoffeeService, private coffeeCupsService: CoffeeCupsService, private storesService : StoresService, private route: ActivatedRoute, private router: Router) {

    this.companyName = this.route.snapshot.params['companyName'];

  }






  ngOnInit() {

    //Vi bruger forkjoin for at vi kan sikre os at stores er opdateret før vi kører getCurrentStoreId.
    forkJoin({
      coffees: this.coffeeCupsService.getCoffeeCups(),
      stores: this.storesService.getStores(),
      preMadeCoffees: this.coffeeCupsService.getPreMadeCoffeeCups()
    }).subscribe(
      ({ coffees, stores, preMadeCoffees }) => {
        this.coffeesCups = coffees;
        this.stores = stores;
        this.premadeCoffeeCups = preMadeCoffees;

        this.getCurrentStoreId();
      },
      error => {
        console.error('Error CoffeeSelectionPage - NgOnInit:', error);
      }
    );
  }

  getCurrentStoreId() {
    this.currentStoreId = this.storesService.getStoreIdByName(this.stores, this.companyName);
    //vi har opdatere premadecoffeecupsbystore her, da vi skal sikre os at vi har opdateret currentStoreId før vi kalder getPremadeCoffeeCupsByStore.
    this.coffeeCupsService.getPreMadeCoffeeCupsByStore(this.currentStoreId).subscribe(
      preMadeCoffeesByStore => {
        this.premadeCoffeeCupsByStore = preMadeCoffeesByStore;
      },
      error => {
        console.error('Error getCurrentStoreId:', error);
      }
    );
  }





  navigateToPremadeCoffeePage(coffeeCup: CoffeeCupsModel) {

    this.currentCoffeeService.setCurrentCoffeeByName(coffeeCup.name);

    this.router.navigate(['/Business', this.companyName, 'CoffeeType', 'CoffeeSelection', coffeeCup.name]);

  }




}
