import { Routes, RouterModule } from '@angular/router';

import { pratoComponent } from './prato.component';
import { PratoFormComponent  } from "./prato-form/prato-form.component";

const pratoRoutes: Routes = [
  { path: 'prato', component: pratoComponent, pathMatch: 'full' },
  { path: 'prato/new', component: PratoFormComponent },
  { path: 'prato/:id', component: PratoFormComponent }
];

export const pratoRouting = RouterModule.forChild(pratoRoutes);
