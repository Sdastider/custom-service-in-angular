import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/* Custom components calling part with lazy loading section  */

import { datepickerModule } from './page/datepickerModule.component';
/* Custom components calling part with lazy loading section  */

const routes: Routes = [
  {
    path: '',
    component: datepickerModule,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class datepickerModuleRouting { }
