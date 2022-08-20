import { NgModule } from '@angular/core';
//import { SharedModule } from '@shared/shared.module';
import { CreateRequestModuleRouting } from './CreateRequestModule-routing.module';
import { CommonModule } from '@angular/common'
import { CreateRequest } from './page/CreateRequestModule/CreateRequest.component';

//import { loaderModule } from '../../shared/loader/page/loaderModule.component';

/* Search panel Related section */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Filter section */
import { eogo_Filter } from './filter/filter.pipe';
import { filterUnique } from './filter/filterUnique.pipe';
/* Filter section */
import { MaterialModule } from '../../shared/sharedModule/shared.module';

@NgModule({
  declarations: [CreateRequest,eogo_Filter,filterUnique],
  imports: [
    CreateRequestModuleRouting,
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class CreateRequestModule { }
