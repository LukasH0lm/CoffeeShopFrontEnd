import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {CurrentUserService} from "./currentUser.service";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  isLoggedIn : boolean = false;
  isAdmin : boolean = false;

  constructor(private router: Router, private currentUserService : CurrentUserService)
  {
    this.currentUserService.updateLoginStatus();
    this.currentUserService.updateAdminStatus();

    this.currentUserService.isLoggedIn.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    }
    );

    this.currentUserService.isAdmin.subscribe((isAdmin) => {
      this.isAdmin = isAdmin;
    }
    );



  }

  canActivate(): boolean {


    if (this.isLoggedIn && this.isAdmin) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
