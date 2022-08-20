import { NgModule } from '@angular/core';

import { datepickerModuleRouting } from './datepickerModule-routing1.module';
import { datepickerModule } from './page/datepickerModule.component';
import { CommonModule } from '@angular/common'


@NgModule({
  declarations: [],
  imports: [
    datepickerModuleRouting,
    CommonModule,
  ],

})
export class datepickerModuleModule{ 
  constructor(){
  }
}
