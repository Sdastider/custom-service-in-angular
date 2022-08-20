import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { gateway } from './page/gatewayModule/gateway.component';
const routes: Routes = [
  {
    path: '',
    component: gateway
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class gatewayModuleRouting { }
