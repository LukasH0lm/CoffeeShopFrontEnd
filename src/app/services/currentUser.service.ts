
import {Injectable} from '@angular/core';
import {UserModel} from "../models/User.model";
import {CookiesService} from "./cookies.service";
import {BehaviorSubject, Observable} from "rxjs";


@Injectable({
  providedIn: 'root',
})
export class CurrentUserService {



  currentUser: UserModel | undefined;



   //https://www.learnrxjs.io/learn-rxjs/subjects/behaviorsubject

  private isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private isAdminSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private currentUserNameSubject: BehaviorSubject<string> = new BehaviorSubject<string>("");

  isLoggedIn: Observable<boolean> = this.isLoggedInSubject.asObservable();
  currentUserName: Observable<string> = this.currentUserNameSubject.asObservable();
  isAdmin: Observable<boolean> = this.isAdminSubject.asObservable();


  constructor(private cookiesService: CookiesService) {
    this.loadUserFromCookies();





  }

   loadUserFromCookies() {
    const currentUserCookieSaved = this.cookiesService.getCookie("huskMig");
    const currentUserCookie = this.cookiesService.getCookie("currentUser");
    console.log("currentUserCookie: ", currentUserCookie)
    if (currentUserCookieSaved) {
      console.log("currentUserCookieSaved: ", currentUserCookieSaved)
      this.currentUser = JSON.parse(currentUserCookieSaved);
    } else  if (currentUserCookie){
      console.log("currentUserCookie: ", currentUserCookie)
      this.currentUser = JSON.parse(currentUserCookie)
    }
   }

  updateAdminStatus() {
    this.isAdminSubject.next(this.currentUser?.isAdmin ?? false);
  }

   updateCurrentUserName() {
      this.currentUserNameSubject.next(this.currentUser?.firstName ?? "");
   }
   updateLoginStatus() {
     this.isLoggedInSubject.next(this.currentUser !== undefined);
   }

    setCurrentUser(user: UserModel | undefined): void {
    this.currentUser = user;
    this.cookiesService.setCookie("currentUser", JSON.stringify(user));
    }

    getCurrentUser() {
    return this.currentUser;

    }



    clearCurrentUser() {
    this.currentUser = undefined;
    this.cookiesService.deleteCookie("currentUser");
    }



}
