import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import { posts } from '../../../../data/schema/posts';
import { Router, ActivatedRoute } from '@angular/router'
import * as _ from 'lodash';
/* Shared service for setting up empid  */
import { SharedService } from '../../../../shared/services/SharedService.service';
/* Shared service for setting up empid  */
/* authservicew with data  */
import { authService } from '../../../../data/service/authService.service';
/* authservicew with data  */
/* Angular validation related section */
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
/* Angular validation related section */

@Component({
  selector: 'gateway-module',
  templateUrl: './gateway.component.html',
  styleUrls: ['./gateway.component.scss']
})
export class gateway implements OnInit {

  userlogindata = {}

  empid :string;
  project_name :string;
  password :string;
  /* Password property section */
  passwordTypeProperty :string = "password";
  private showPass : number = 0 ;
  zmdieyeclass: string = "zmdi zmdi-eye";
  /* Password property section */
/* Angular validation related section added on 08/08/2020 */
    registerForm: FormGroup;
    submitted = false;
/* Angular validation related section added on 08/08/2020 */

 constructor(private formBuilder: FormBuilder,private router:Router,private route:ActivatedRoute,private authService:authService){
  }  

    ngOnInit() {
      this.registerForm = this.formBuilder.group({
        username: ['', [Validators.required,Validators.minLength(2)]],
        password: ['', Validators.required]
      });
    }
    
    /*
    [ Show pass ] 
    */ 
    btnshowpassEvent(){
      if(this.showPass==0){
        this.passwordTypeProperty = "text";
        this.zmdieyeclass = "zmdi zmdi-eye-off";
        this.showPass = 1 ;
      }
      else
      {
        this.passwordTypeProperty = "password";
        this.zmdieyeclass = "zmdi zmdi-eye";
        this.showPass = 0 ;
      }
    }
    /*
    [ Show pass ] 
    */ 
      // convenience getter for easy access to form fields
        get f() { return this.registerForm.controls; }

        onSubmit() {
         console.log(this.registerForm.value)
          this.submitted = true;
          // stop here if form is invalid
          if (this.registerForm.invalid) {
            return;
          }
          
         console.log(this.registerForm.value)
          let _loginUrl = "http://localhost:5000/api/authentication";
         this.authService.login(this.registerForm.value,_loginUrl).subscribe(
              res =>{
                 console.log(res['token'])
                 localStorage.setItem("token", res['token'])
                 this.router.navigate(['./bodyModule']) 
                },
              error => console.log(error)
        )
         //this.router.navigate(['./bodyModule'],{ skipLocationChange: true}) 
          
        }
 }


