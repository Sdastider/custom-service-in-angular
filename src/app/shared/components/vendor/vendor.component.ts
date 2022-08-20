import { Component } from '@angular/core';

@Component({
  selector: 'vendor-module',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class vendor {
   /* Sidebar collapse event related property */
   toggleclassProperty :string = "";
   private sidebarToggleClassPropertyFlag : number = 0 ;
   navbar_btn:string="navbar-btn"
   /*  Sidebar collapse event related property */
  constractor(){
    
  }
 
  /* Sidebar collapse event related function */
  sidebarCollapseEvent(){
    console.log(this.toggleclassProperty)
    if(this.sidebarToggleClassPropertyFlag==0){
      this.navbar_btn = "navbar-btn active"
      this.toggleclassProperty = "";
      this.sidebarToggleClassPropertyFlag = 1 ;
    }
    else
    {
      this.navbar_btn = "navbar-btn"
      this.toggleclassProperty = "active";
      this.sidebarToggleClassPropertyFlag = 0 ;
    }
  }
  /* Sidebar collapse event related function */
}
