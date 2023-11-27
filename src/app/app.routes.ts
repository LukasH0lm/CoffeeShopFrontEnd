import { Routes } from '@angular/router';
import {FrontpageComponent } from './frontpage/frontpage.component';
import {OrderpageComponent} from "./orderpage/orderpage.component";





export const routes: Routes = [
    { path: 'Home', component: FrontpageComponent },
    { path: 'Order', component: OrderpageComponent },
];
