import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { pratoComponent } from './prato.component';
import { PratoService } from './shared/prato.service';
import { CurrencyMaskModule } from "ng2-currency-mask";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule,
    CurrencyMaskModule
  ],
  declarations: [
    pratoComponent
  ],
  exports: [
    pratoComponent
  ],
  providers: [
    PratoService
  ]
})
export class PratoModule { }
