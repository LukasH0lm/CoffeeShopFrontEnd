import { Routes } from '@angular/router';
import {FrontpageComponent } from './frontpage/frontpage.component';
import {OrderpageComponent} from "./orderpage/orderpage.component";
import {SelectpageComponent} from "./selectpage/selectpage.component";





export const routes: Routes = [
    { path: 'Home', component: FrontpageComponent },
    { path: 'Order', component: OrderpageComponent },
    { path: 'Select', component: SelectpageComponent },

];
