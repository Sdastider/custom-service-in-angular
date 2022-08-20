import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'datatable-module',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class datatable implements OnInit{
  @Input() result : any;
  @Input() header : any;
  constructor(private router:Router){
  }
  ngOnInit(){
    
  }
  onSave(param){    
    console.log("Paramas is "+param);  
    this.router.navigate(['./bodyModule/eogomodule/reqSpecificModule',param])  
}
}
