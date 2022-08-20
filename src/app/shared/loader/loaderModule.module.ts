import { NgModule } from '@angular/core';

import { loaderModuleRouting } from './loaderModule-routing1.module';
import { loaderModule } from './page/loaderModule.component';
import { CommonModule } from '@angular/common'


@NgModule({
  declarations: [],
  imports: [
    loaderModuleRouting,
    CommonModule,
  ],

})
export class loaderModuleModule{ 
  constructor(){
  }
}
