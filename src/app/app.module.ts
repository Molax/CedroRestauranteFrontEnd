import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
 

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { routing } from './app.routing';
import { restaurantsRouting } from "./restaurants/restaurants.routing";
import { RestaurantsModule } from "./restaurants/restaurants.module";
import { RestaurantFormComponent } from './restaurants/restaurant-form/restaurant-form.component';
import { pratoRouting } from "./prato/prato.routing";
import { PratoModule } from "./prato/prato.module";
import { PratoFormComponent } from './prato/prato-form/prato-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    NotFoundComponent,
    RestaurantFormComponent,
    PratoFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    RestaurantsModule,
    PratoModule,
    pratoRouting,
    restaurantsRouting,
    routing,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
