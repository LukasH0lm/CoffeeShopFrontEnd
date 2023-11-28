import { Routes } from '@angular/router';
import {FrontpageComponent } from './frontpage/frontpage.component';
import {OrderpageComponent} from "./orderpage/orderpage.component";
import {SelectpageComponent} from "./selectpage/selectpage.component";
import {CoffeetypepageComponent} from "./coffeetypepage/coffeetypepage.component";
import {CustomcoffeepageComponent} from "./customcoffeepage/customcoffeepage.component";
import {CoffeeselectionpageComponent} from "./coffeeselectionpage/coffeeselectionpage.component";





export const routes: Routes = [
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    { path: 'Home', component: FrontpageComponent },
    { path: 'Business', component: SelectpageComponent },
    { path: 'Business/:companyName/CoffeeType', component: CoffeetypepageComponent },
    { path: 'Business/:companyName/CoffeeType/CustomCoffee', component: CustomcoffeepageComponent },
    { path: 'Business/:companyName/CoffeeType/CoffeeSelection', component: CoffeeselectionpageComponent },
    { path: 'Order/:companyName', component: OrderpageComponent },


];
