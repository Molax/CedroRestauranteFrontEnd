import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { RestaurantsComponent } from './restaurants.component';
import { RestaurantsService } from './shared/restaurants.service'; 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule
  ],
  declarations: [
    RestaurantsComponent
  ],
  exports: [
    RestaurantsComponent
  ],
  providers: [
    RestaurantsService
  ]
})
export class RestaurantsModule { }
