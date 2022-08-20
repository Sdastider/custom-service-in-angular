import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { dashboard } from './page/dashboardModule/dashboard.component';
const routes: Routes = [
  {
    path: '',
    component: dashboard,
    // children: 
    // [
    //   {         
    //       path: 'reqSpecificModule/:param/:param1',
    //       loadChildren: () => import('../ReqSpecificModule/ReqSpecificModule.module').then(m => m.ReqSpecificModule)
    //       //component :ReqSpecificModule
    //     },
    // ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class dashboardModuleRouting { }
