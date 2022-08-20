import { Injectable } from '@angular/core';

//import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class SharedService{
    userData;
    constructor(){
      this.userData= {};
    }
    setUserData(val: object){
      this.userData= val;
    }
    getUserData(){
      return this.userData;
    }
}
