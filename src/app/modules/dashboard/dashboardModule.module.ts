import { NgModule } from '@angular/core';
//import { SharedModule } from '@shared/shared.module';
import { dashboardModuleRouting } from './dashboardModule-routing.module';
import { CommonModule } from '@angular/common'
import { dashboard } from './page/dashboardModule/dashboard.component';

import { loaderModule } from '../../shared/loader/page/loaderModule.component';

/* Search panel Related section */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Filter section */
import { eogo_Filter } from './filter/filter.pipe';
import { filterUnique } from './filter/filterUnique.pipe';
/* Filter section */
import { MaterialModule } from '../../shared/sharedModule/shared.module';

@NgModule({
  declarations: [dashboard,eogo_Filter,loaderModule,filterUnique],
  imports: [
    dashboardModuleRouting,
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class dashboardModule { }
