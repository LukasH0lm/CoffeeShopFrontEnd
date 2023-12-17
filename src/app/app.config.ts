import {ApplicationConfig, NgModule} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import {HttpClientModule, provideHttpClient} from "@angular/common/http";
import {OrderManagementComponent} from "./order-management/order-management.component";
import {BrowserModule, bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app.component";


// https://this-is-angular.github.io/angular-guides/docs/standalone-apis/using-the-httpclient-in-a-standalone-angular-application
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimations(), provideHttpClient()]
};




export class AppModule { }
