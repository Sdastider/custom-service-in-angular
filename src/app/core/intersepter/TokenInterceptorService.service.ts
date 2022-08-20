import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { authService } from "../../data/service/authService.service"

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{
  
  constructor(private Injector:Injector){ 
  }
  intercept(req, next) {
    let authService_tmp = this.Injector.get(authService)
    console.log("Intersecptors")
    console.log(authService_tmp.getToken())
    let tokenizedReq = req.clone(
      {
        headers: req.headers.set('Authorization', 'bearer ' + authService_tmp.getToken())
      }
    )
    return next.handle(tokenizedReq)
  }

}

