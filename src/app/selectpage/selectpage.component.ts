import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {Router, RouterLink} from "@angular/router";
import {StoresService} from "../services/API/Stores.service";
import {MatGridListModule} from "@angular/material/grid-list";
import {StoresModel} from "../models/Stores.model";
import {MatIconModule} from "@angular/material/icon";
import {CurrentStoreService} from "../services/currentStore.service";
import {BasketService} from "../services/basket.service";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";


@Component({
  selector: 'app-selectpage',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatGridListModule, MatIconModule, RouterLink],
  templateUrl: './selectpage.component.html',
  styleUrl: './selectpage.component.css'
})
export class SelectpageComponent implements OnInit {
  constructor(private router: Router, private dialog: MatDialog, private storesService: StoresService, private currentStoreService: CurrentStoreService, private basketService: BasketService) {
  }


  stores: StoresModel[] = [];
  dialogRef: MatDialogRef<any> | undefined;
  selectedStore: StoresModel | null = null;
  @ViewChild('template', {static: true}) templateRef!: TemplateRef<any>;


  ngOnInit(): void {
    this.storesService.getStores().subscribe(
      data => {
        this.stores = data;
      }
    )
  }

  openDialog(): void {
    this.dialogRef = this.dialog.open(this.templateRef, {
      width: '400px',
      height: '165px'
    });
  }

  closeDialog(): void {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }


  changeStoreAndResetBasket(store: StoresModel) {
    this.basketService.clearCart();
    this.currentStoreService.setCurrentStore(store);
    this.closeDialog();
    this.router.navigate(['/Business', store.name, 'CoffeeType']);
  }

  goBackToCurrentStore() {
    this.closeDialog();
    this.router.navigate(['/Business', this.currentStoreService.getCurrentStore()?.name, 'CoffeeType']);
  }

  navigateToCoffeeTypePageAndSetCurrentStore(store: StoresModel) {

    this.selectedStore = store;

    console.log("currentStore: ", this.currentStoreService.getCurrentStore())
    console.log("store: ", store)

    if (this.currentStoreService.getCurrentStore()?.storeId !== undefined && store.storeId !== this.currentStoreService.getCurrentStore()?.storeId && this.basketService.getItems().length > 0) {

      this.openDialog();

    } else {

      this.currentStoreService.setCurrentStore(store);
      console.log("currentStore: ", this.currentStoreService.getCurrentStore())

      this.router.navigate(['/Business', store.name, 'CoffeeType']);
    }

  }


}
