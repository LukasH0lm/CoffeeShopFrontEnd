import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet} from '@angular/router';
import {HeadercomponentComponent} from "./headercomponent/headercomponent.component";
import {FootercomponentComponent} from "./footercomponent/footercomponent.component";
import {MatMenuModule} from "@angular/material/menu";
import {BasketService} from "./services/basket.service";
import {CurrentStoreService} from "./services/currentStore.service";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, HeadercomponentComponent, FootercomponentComponent, MatMenuModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'CoffeeShopFrontEnd';

  constructor(private basketService: BasketService, private currentStoreService : CurrentStoreService) {}
  ngOnInit(): void {
    this.basketService.loadBasketData();
    this.currentStoreService.loadStoreFromCookies();

  }


}








