import { Component } from '@angular/core';

@Component({
  selector: 'body-module',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class bodyModule {
    /* Sidebar collapse event related property */
    toggleclassProperty :string = "";
    private sidebarToggleClassPropertyFlag : number = 0 ;
    navbar_btn:string="navbar-btn"
    /*  Sidebar collapse event related property */
    Flag_1 : Boolean = true;
    Flag_2 : Boolean = false;
    Flag_3 : Boolean = false;

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

  addActiveClass(params){
    if(params==="dashboard"){
      this.Flag_1 = true;
      this.Flag_2 = this.Flag_3 = false ;
    }else if(params==="create_request"){
      this.Flag_2 = true;
      this.Flag_1 = this.Flag_3 = false ;
    } 
  }
}
