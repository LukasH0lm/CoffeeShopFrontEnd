import {Component, TemplateRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {CurrentCoffeeService} from "../services/currentcoffee.service";
import {BasketService} from "../services/basket.service";
import {MatIconModule} from "@angular/material/icon";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule} from "@angular/forms";
import {CoffeeCupsModel} from "../models/CoffeeCups.model";
import {Observable } from "rxjs";

import {MatDialog, MatDialogRef} from "@angular/material/dialog";



@Component({
  selector: 'app-premadecoffeepage',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatCheckboxModule, FormsModule, RouterLink],
  templateUrl: './premadecoffeepage.component.html',
  styleUrl: './premadecoffeepage.component.css'

})
export class PremadecoffeepageComponent {

  coffeeCup: Observable<CoffeeCupsModel | undefined> | undefined;
  dialogRef: MatDialogRef<any> | undefined;


  constructor(private currentCoffeeService: CurrentCoffeeService, private dialog: MatDialog, private basketService: BasketService, private route: ActivatedRoute) {

    const routingCoffeeName = this.route.snapshot.params['coffeeName'];

    if (this.currentCoffeeService.getCurrentCoffee() === undefined) {
      this.currentCoffeeService.setCurrentCoffeeByName(routingCoffeeName);
    }

    this.coffeeCup = this.currentCoffeeService.getCurrentCoffee();


  }



  openDialog(templateRef: TemplateRef<any>): void {
    this.dialogRef = this.dialog.open(templateRef, {
      width: '400px',
      height: '105px'
    });
  }

  closeDialog(): void {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }

  addToCart(cup?: CoffeeCupsModel): void {
    if (cup) {
      this.basketService.addToCart(cup);
    } else {
      console.error('Trying to add undefined cup to the cart.' + cup);
    }

  }



}
