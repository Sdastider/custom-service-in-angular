import { Injectable } from '@angular/core';

//import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class SharedServiceList{
    serviceList;
    constructor(){
    }
    getServiceList(url_string){
        switch(url_string){
            case "A":
                return 'A';
            break;
            case "B":
                return 'B';
            break;
        }
    }
 
}
