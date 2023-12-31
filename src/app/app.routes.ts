import { Routes } from '@angular/router';
import {FrontpageComponent } from './frontpage/frontpage.component';
import {OrderpageComponent} from "./orderpage/orderpage.component";
import {SelectpageComponent} from "./selectpage/selectpage.component";
import {CoffeetypepageComponent} from "./coffeetypepage/coffeetypepage.component";
import {CoffeeselectionpageComponent} from "./coffeeselectionpage/coffeeselectionpage.component";
import {PremadecoffeepageComponent} from "./premadecoffeepage/premadecoffeepage.component";
import {LogIndPageComponent} from "./log-ind-page/log-ind-page.component";
import {RegisterUserPageComponent} from "./register-user-page/register-user-page.component";
import {OrderManagementComponent} from "./order-management/order-management.component";
import {CustomCoffeeComponent} from "./custom-coffee/custom-coffee.component";
import {SocialMediaComponent} from "./social-media/social-media.component";
import {AdminGuard} from "./services/AdminGuard.service";





export const routes: Routes = [
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    { path: 'Home', component: FrontpageComponent },
    { path: 'Business', component: SelectpageComponent },
    { path: 'Business/:companyName/CoffeeType', component: CoffeetypepageComponent },
    { path: 'Business/:companyName/CoffeeType/CustomCoffee', component: CustomCoffeeComponent },
    { path: 'Business/:companyName/CoffeeType/CoffeeSelection', component: CoffeeselectionpageComponent },
    { path: 'Business/:companyName/CoffeeType/CoffeeSelection/:coffeeName', component: PremadecoffeepageComponent },
    { path: 'Order', component: OrderpageComponent },
    { path: 'Logind', component: LogIndPageComponent },
    { path: 'RegisterBruger', component: RegisterUserPageComponent },
  { path: 'admin', component: OrderManagementComponent, canActivate: [AdminGuard]},
  {path: 'SocialMedia', component: SocialMediaComponent}

];


