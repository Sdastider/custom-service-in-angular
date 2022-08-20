import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/* Mdb boostrap container section */

/* Mdb boostrap container section */
/* Module specific import */
/*
  import { EoGoModule } from './modules/EoGoModule/EoGoModule.component';
  import { EoGoSchemaModule } from './modules/EoGoSchemaModule/EoGoSchemaModule.component';
  import { MyEoGoStatusModule } from './modules/MyEoGoStatusModule/MyEoGoStatusModule.component';
*/
/* Module specific import */
/* Lauout specific import */
  import { footerModule } from '../app/shared/components/footer/footer.component';
  import { headerModule } from '../app/shared/components/header/header.component';
  import { bodyModule } from '../app/shared/components/body/body.component';
  import { vendor } from '../app/shared/components/vendor/vendor.component';
  import { authentication } from '../app/shared/components/auth-layout/authentication.component';
/* Lauout specific import */
/* Service provided */
//import { EmployeeService } from './employee.service';
/* Service provided */
/* http Client module */
//import { HttpClientModule } from '@angular/common/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from  '@angular/common/http';
import { TokenInterceptorService } from '../app/core/intersepter/TokenInterceptorService.service';
/* http Client module */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/* pagination related library */
import { loaderModuleModule } from './shared/loader/loaderModule.module';


@NgModule({
  declarations: [
    AppComponent,
    footerModule,
    headerModule,
    bodyModule,
    vendor,
    authentication
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,                  /* Reactive form related module */
    ReactiveFormsModule ,         /* Reactive form related module */
    loaderModuleModule
  ],
  exports:[

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true } 
  ],   // Service  
  bootstrap: [AppComponent]
})
export class AppModule { 

}
