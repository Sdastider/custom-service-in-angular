import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';
import { SharedServiceList } from '../../shared/services/serviceList.service';
import { posts } from '../schema/posts';
import { Observable,throwError } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class dashboardService{

  
  constructor(private http: HttpClient){ 
  }

  
  postData(data: posts, newLocal:string):Observable<posts[]>
  {
     console.log(data)
     console.log(newLocal)
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