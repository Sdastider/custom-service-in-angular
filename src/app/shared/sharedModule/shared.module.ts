import { NgModule } from '@angular/core';
/* Sharable popup import section */
import { popupSharedModule } from '../../modules/popup/popupModule.module';
/* Sharable popup import section */

const MaterialComponent = [
    popupSharedModule
]

@NgModule({

  imports: [
    MaterialComponent
  ],
  exports:[
    MaterialComponent
  ]
})
export class MaterialModule { }
