import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';
import { map } from 'rxjs/operators';

//import { posts } from '../schema/posts';
import { Observable,throwError } from 'rxjs'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class authService{

  constructor(private http: HttpClient,private _router: Router){ 
  }
   // login
   login(data: any, _loginUrl:string){
    return this.http.post<any>(_loginUrl, data)
    .pipe(

        // the backend service sends an instance of the user
        // user: any (because .post<any>)
        
        map(user => {
            // login successful if the response has jwt token
            if(user && user.token){
                // store user details and jwt token in the local storage to keep the user logged in between page refreshes
                //localStorage.setItem('currentUser', JSON.stringify(user));
                console.log(user)
            }
            return user;
        })
    );
}

  loggedIn(){
       return !! localStorage.getItem('token')
   }

  postData(data: any, _loginUrl:string):Observable<any[]>
  {
     return  this.http.post<any>(_loginUrl, data).catch(this.error) 
  }

  logout() {
    localStorage.removeItem('token')
    this._router.navigate(['/'])
  }
  
  getToken(){
    return localStorage.getItem('token')
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