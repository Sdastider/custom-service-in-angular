import { NgModule } from '@angular/core';

import { popupModuleRouting } from './popup-routing.module';
import { popup } from './page/popup.component';
import { CommonModule } from '@angular/common';
/* form group for add profile section*/
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/* form group for add profile section */


@NgModule({
  declarations: [popup],
  imports: [
    popupModuleRouting,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    popup
  ]
})
export class popupSharedModule{}
