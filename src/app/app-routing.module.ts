import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Lauout specific import */
import { bodyModule } from '../app/shared/components/body/body.component';
import { vendor } from '../app/shared/components/vendor/vendor.component';
import { authentication } from './shared/components/auth-layout/authentication.component';
/* Lauout specific import */
import { AuthGuard } from '../app/core/guard/auth.guard';
/* Authguard related section */


const routes: Routes = [
  {
    path: 'bodyModule',
    canActivate: [AuthGuard],
    component: bodyModule,
    children: [
          {
            path: '',
            loadChildren: () => import('./modules/dashboard/dashboardModule.module').then(m => m.dashboardModule),
          }
          ,
          {
            path: 'dashboard',
            loadChildren: () => import('./modules/dashboard/dashboardModule.module').then(m => m.dashboardModule),
          }
          ,
          {
            path: 'create_request',
            loadChildren: () => import('./modules/CreateRequest/CreateRequestModule.module').then(m => m.CreateRequestModule),
          }
    ]
  },
  {
    path: 'vendor',
    canActivate: [AuthGuard],
    component: vendor,
  },
  {
      path: '',
      component: authentication,
      loadChildren: () => import('./modules/gateway/gatewayModule.module').then(m => m.gatewayModule),              
  }
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule { }
