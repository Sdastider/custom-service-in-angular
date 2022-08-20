import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';
import { SharedServiceList } from '../../shared/services/serviceList.service';
import { posts } from '../schema/posts';
import { Observable,throwError } from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class createRequestService{
  constructor(private http: HttpClient){ 
  }
  postData(data: any, newLocal:string):Observable<any[]>
  {
     return  this.http.post<any>(newLocal, data).catch(this.error) 
  }

  error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}