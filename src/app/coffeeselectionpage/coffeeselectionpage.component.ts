import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import {ActivatedRoute, Router} from "@angular/router";
import {CurrentCoffeeService} from "../services/currentcoffee.service";
import {CoffeeCupsModel} from "../models/CoffeeCups.model";
import {CoffeeCupsService} from "../services/API/CoffeeCups.service";
import {forkJoin} from "rxjs";
import {StoresService} from "../services/API/Stores.service";
import {StoresModel} from "../models/Stores.model";
import {CurrentStoreService} from "../services/currentStore.service";


@Component({
  selector: 'app-coffeeselectionpage',
  standalone: true,
  imports: [CommonModule, MatGridListModule],
  templateUrl: './coffeeselectionpage.component.html',
  styleUrl: './coffeeselectionpage.component.css'
})
export class CoffeeselectionpageComponent implements OnInit{

  coffeesCups: CoffeeCupsModel[] = [];
  CoffeeCupsByStore: CoffeeCupsModel | any;
  stores : StoresModel[] = [];
  companyName: string;



  constructor(private currentCoffeeService: CurrentCoffeeService, private coffeeCupsService: CoffeeCupsService, private storesService : StoresService, private currentStoreService : CurrentStoreService, private route: ActivatedRoute, private router: Router) {

    this.companyName = this.route.snapshot.params['companyName'];

  }






  ngOnInit() {

    //Vi bruger forkjoin for at vi kan sikre os at coffees er opdateret før vi kører getCoffeeShopsForEachStore.
    forkJoin({
      coffees: this.coffeeCupsService.getCoffeeCups(),
      stores: this.storesService.getStores(),

    }).subscribe(
      ({ coffees, stores }) => {
        this.coffeesCups = coffees;
        this.stores = stores;


       this.getCoffeeShopsForEachStore();


      },
      error => {
        console.error('Error CoffeeSelectionPage - NgOnInit:', error);
      }
    );
  }



  getCoffeeShopsForEachStore() {

    this.coffeeCupsService.getCoffeeCupsByStore(this.currentStoreService.currentStore?.storeId).subscribe(
      CoffeeCupsByStore => {
        this.CoffeeCupsByStore = CoffeeCupsByStore;
        console.log("CoffeeCupsByStore: ", CoffeeCupsByStore)
      },
      error => {
        console.error('Error GetCoffeeCupsByStore:', error);
      }
    );

  }





  navigateToPremadeCoffeePage(coffeeCup: CoffeeCupsModel) {

    this.currentCoffeeService.setCurrentCoffeeByName(coffeeCup.name);

    this.router.navigate(['/Business', this.companyName, 'CoffeeType', 'CoffeeSelection', coffeeCup.name]);

  }




}
