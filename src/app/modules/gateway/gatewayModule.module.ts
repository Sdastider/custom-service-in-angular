import { NgModule } from '@angular/core';
//import { SharedModule } from '@shared/shared.module';
import { gatewayModuleRouting } from './gatewayModule-routing.module';
import { CommonModule } from '@angular/common'
import { gateway } from './page/gatewayModule/gateway.component';

/* Search panel Related section */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [gateway],
  imports: [
    gatewayModuleRouting,
    CommonModule,
    FormsModule, 
    ReactiveFormsModule
    
  ]
})
export class gatewayModule { }
