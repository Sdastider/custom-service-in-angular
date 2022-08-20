import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateRequest } from './page/CreateRequestModule/CreateRequest.component';
const routes: Routes = [
  {
    path: '',
    component: CreateRequest,
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
export class CreateRequestModuleRouting { }
