import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import { posts } from '../../../../data/schema/posts';
import { Router, ActivatedRoute } from '@angular/router'
import * as _ from 'lodash';
import { authService } from '../../../../data/service/authService.service';
import { createRequestService } from '../../../../data/service/createRequestService.service';
/* Addprofil section */
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
/* Addprofil section */



@Component({
  selector: 'createrequest-module',
  templateUrl: './CreateRequest.component.html',
  styleUrls: ['./CreateRequest.component.scss']
})
export class CreateRequest implements OnInit {

  /* Addprofil section */
    form: FormGroup;
  /* Addprofil section */
    /* server_error_status is for popup */
    server_error_status: boolean  = true;  /* popup module variable */
    /* server_error_status is for popup */

 constructor(private route:ActivatedRoute,private authService:authService,public fb: FormBuilder,private http:createRequestService){

 }

  ngOnInit(){ 

          // this.getDataforDashboard({},"http://localhost:5000/api/viewtickets");
          /*
          this.form = this.fb.group({
            VacancyId : this.id,
            EmpCode : 25,
            FirstName: ['', [Validators.required, Validators.minLength(3)]],
            LastName: ['', Validators.required],
            DOB: ['', Validators.required],
            Emailid: ['', [Validators.required, Validators.email]],
            ExpInMonths:  ['', Validators.required],
            MobileNumber: ['',[Validators.required, Validators.minLength(10)]],
            CurrentLocation: ['', Validators.required],
            Skills: ['',Validators.required],
            CV: [''],                  
            PMOName: 25,
            ISPMO:"0"
          })

        userid: "1",
        username: "raja",
        ticketpriority: "High",
        ticketdescription: "Hello world",
        ticketcatagory:"SAP",
        ticketsubcatagory:"SAP_123",
        location:"kolkata"

          */
         
         this.form = this.fb.group({
          userid: "1",
          username: "raja dastidar",
          ticket_incident_type:['', Validators.required],
          ticket_priority: ['', Validators.required],
          ticket_description: ['', Validators.required],
          ticket_catagory:['', Validators.required],
          ticket_sub_catagory:['', Validators.required],
          location:['', Validators.required],
          
        })

  }

  submitForm() {
    console.log(this.form.value)
    this.createRequestPostData();
  }

createRequestPostData = () =>{
  /*   
  var formdata = new FormData();
      formdata.append("userid", "1");
      formdata.append("username", "kaka");
      formdata.append("ticketpriority", "Low");
      formdata.append("ticketdescription", "kaka description");
      formdata.append("ticketcatagory", "SAP");
      formdata.append("ticketsubcatagory", "SAP_sub");
      formdata.append("location", "kolkata");
    */  
     
      let param =
      {
        userid: "1",
        username: "raja",
        ticket_incident_type: "Incident",
        ticket_priority: "High",
        ticket_description: "Hello world",
        ticket_catagory:"SAP",
        ticket_sub_catagory:"SAP_123",
        location:"kolkata"
      }
     
  this.http.postData( this.form.value ,"http://localhost:5000/api/ticketregistration").subscribe(
    res=>{
          console.log(res)
    }, 
    error => console.log(error),
  () => console.log("HI")  );
  }



}


