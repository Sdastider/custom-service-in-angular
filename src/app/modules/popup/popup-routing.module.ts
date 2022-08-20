import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/* Custom components calling part with lazy loading section  */
import { popup } from './page/popup.component';
/* Custom components calling part with lazy loading section  */

const routes: Routes = [
  {
    path: '',
    component: popup,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class popupModuleRouting { }
