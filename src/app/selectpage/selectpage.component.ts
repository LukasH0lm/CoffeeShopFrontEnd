import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {Router} from "@angular/router";
import {StoresService} from "../services/API/Stores.service";
import {MatGridListModule} from "@angular/material/grid-list";
import {StoresModel} from "../models/Stores.model";
import {MatIconModule} from "@angular/material/icon";


@Component({
  selector: 'app-selectpage',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatGridListModule, MatIconModule],
  templateUrl: './selectpage.component.html',
  styleUrl: './selectpage.component.css'
})
export class SelectpageComponent implements OnInit{
  constructor(private router: Router, private storesService : StoresService) {}


  stores: StoresModel[] = [];




  ngOnInit(): void {
    this.storesService.getStores().subscribe(
      data => {
        this.stores = data;
      }
    )
  }




  navigateToCoffeeTypePage(companyName: string) {
    this.router.navigate(['/Business', companyName, 'CoffeeType'] );
  }


}
