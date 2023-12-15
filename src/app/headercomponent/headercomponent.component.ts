import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {BasketPopupService} from "../basketcomponent/basketpopup.service";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogClose} from "@angular/material/dialog";
import {MatIconModule} from '@angular/material/icon';
import {CurrentUserService} from "../services/currentUser.service";
import {MatMenuModule, MatMenuTrigger} from "@angular/material/menu";
import { ViewChild } from '@angular/core';
import {CookiesService} from "../services/cookies.service";
import {BasketService} from "../services/basket.service";

@Component({
  selector: 'app-headercomponent',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, MatButtonModule, MatDialogClose, MatIconModule, MatMenuModule],
  templateUrl: './headercomponent.component.html',
  styleUrl: './headercomponent.component.css'
})
export class HeadercomponentComponent implements OnInit{

  @ViewChild(MatMenuTrigger) menuTrigger!: MatMenuTrigger;

  isLoggedIn: boolean = false;
  userName: string = "";


  constructor(private popupBasketService : BasketPopupService, private currentUserService : CurrentUserService, private cookiesService : CookiesService, private router : Router, private basketService : BasketService) {


    this.currentUserService.updateLoginStatus();
    this.currentUserService.updateCurrentUserName();

  }



  openCartPopup(): void {

    this.popupBasketService.openCartPopup();
  }





  logOutButtonClicked() : void {

    this.currentUserService.clearCurrentUser();

    if (this.menuTrigger) {
      this.menuTrigger.closeMenu();
    }

    this.cookiesService.deleteCookie("huskMig");
    this.currentUserService.updateLoginStatus();
    this.currentUserService.updateCurrentUserName();

  }
  userButtonClicked(): void {

    if (this.currentUserService.getCurrentUser() == undefined) {
      this.router.navigate(['Logind']);
    }
    else {

      // Do nothing for now
    }

  }

  ngOnInit(): void {

    this.currentUserService.isLoggedIn
      .subscribe((isLoggedIn: boolean) => {
        this.isLoggedIn = isLoggedIn;
      });

    this.currentUserService.currentUserName
      .subscribe((currentUserName: string) => {
        this.userName = currentUserName;
      });
  }






}
