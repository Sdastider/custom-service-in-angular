import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/* Custom components calling part with lazy loading section  */
import { loaderModule } from './page/loaderModule.component';
/* Custom components calling part with lazy loading section  */

const routes: Routes = [
  {
    path: '',
    component: loaderModule,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class loaderModuleRouting { }
