import { Component, OnInit } from '@angular/core';
import { dashboardService } from '../../../../data/service/dashboardService.service';
import { SharedService } from '../../../../shared/services/SharedService.service';
import 'rxjs/Rx';
import { posts } from '../../../../data/schema/posts';
import { Router, ActivatedRoute } from '@angular/router'
import * as _ from 'lodash';
import { authService } from '../../../../data/service/authService.service';



@Component({
  selector: 'dashboard-module',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class dashboard implements OnInit {

  verType: string ="ver1";
  public viewTicketsServerResult: any[] = [];
  public viewTicketslLocalResult: any[] = [];
  public size:Number = null;
  public total_request:Number = null;
  public new_request:Number = null;
  public answered_request:Number = null;
  public solved_request:Number = null;
  public closed_request:Number = null;
  public unanswered_request:Number = null;


 constructor(private route:ActivatedRoute,private router:Router,private authService:authService){
    this.total_request = 0;
    this.new_request = 0 ;
    this.answered_request = 0;
    this.solved_request = 0;
    this.closed_request = 0;
    this.unanswered_request = 0;
 }

  ngOnInit(){  
          this.getDataforDashboard({},"http://localhost:5000/api/viewtickets");
  }

  getDataforDashboard = (params,_Url) =>{
        this.authService.postData(params,_Url).subscribe(
          res =>{
             //console.log("Ticket registration result")
             //console.log(res)
             this.size= res["data"].length;
             this.total_request = res["data"].length;
             this.viewTicketsServerResult = res["data"]
             //console.log(this.viewTicketsServerResult)
             //console.log(this.size)
             
             let tmp ;
             if (this.viewTicketsServerResult) {
             this.viewTicketsServerResult.map((data_block,index)=>{
                tmp = {}
                 for (var key in data_block) {
                       if(key==="_id"){
                         tmp["Request_Id"] = data_block[key];
                       }else if(key==="ticket_chat_group_id"){
                         tmp["ticket_chat_group_id"] = data_block[key];
                       }else if(key==="ticket_catagory"){
                         tmp["Ticket_catagory"] = data_block[key];
                       }else if(key==="ticket_sub_catagory"){
                         tmp["Ticket_sub_catagory"] = data_block[key];
                       }else if(key==="ticket_action"){
                         tmp["Ticket_action"] = data_block[key];
                       }else if(key==="ticket_closingn_date"){
                         tmp["Ticket_closingn_date"] = data_block[key];
                       }else if(key==="ticket_creation_date"){
                         tmp["Ticket_creation_date"] = data_block[key];
                       }else if(key==="ticket_description"){
                         tmp["Ticket_description"] = data_block[key];
                       }else if(key==="ticket_incident_type"){
                         tmp["Ticket_incident_type"] = data_block[key];
                       }else if(key==="ticket_priority"){
                        tmp["Ticket_priority"] = data_block[key];
                      }else if(key==="ticket_status"){
                        tmp["Ticket_status"] = data_block[key];
                      }else if(key==="userid"){
                        tmp["Requester_id"] = data_block[key];
                      }
                 }  
                 this.viewTicketslLocalResult.push(tmp)
             })}
             //console.log(this.viewTicketslLocalResult)
             //console.log(this.count_request_no(this.viewTicketslLocalResult));
             [this.new_request, this.answered_request, this.solved_request, this.closed_request, this.unanswered_request ] = this.count_request_no(this.viewTicketslLocalResult)
            },
          error => {
            console.log(error)
           }
          )
      }



      log_out_User(){
        this.authService.logout();
      }

      count_request_no = (viewTicketslLocalResult) =>{
        var count_Answared=0,count_High=0,count_Low=0,count_Medium=0,count_Urgent=0,count_UnAnswared=0,count_New_Ticket=0,count_solved_Ticket=0,count_closed=0,count_open=0;
        for (let i=0, types = {}; i < viewTicketslLocalResult.length; i++){
            
            if ((viewTicketslLocalResult[i].Ticket_status).toLowerCase() === ("closed").toLowerCase() && !types[viewTicketslLocalResult[i]]) {
              types[viewTicketslLocalResult[i].type] = true;
              count_closed++;
              }
            if ((viewTicketslLocalResult[i].Ticket_status).toLowerCase() === ("open").toLowerCase() && !types[viewTicketslLocalResult[i]]) {
              types[viewTicketslLocalResult[i].type] = true;
              count_open++;
              }
            if ((viewTicketslLocalResult[i].Ticket_action).toLowerCase() === ("Answared").toLowerCase() && !types[viewTicketslLocalResult[i]]) {
              types[viewTicketslLocalResult[i].type] = true;
              count_Answared++;
              }
             if ((viewTicketslLocalResult[i].Ticket_action).toLowerCase() === ("UnAnswared").toLowerCase() && !types[viewTicketslLocalResult[i]]) {
                types[viewTicketslLocalResult[i].type] = true;
                count_UnAnswared++;
              }
            if ((viewTicketslLocalResult[i].Ticket_action).toLowerCase() === ("New Ticket").toLowerCase() && !types[viewTicketslLocalResult[i]]) {
              types[viewTicketslLocalResult[i].type] = true;
              count_New_Ticket++;
            }
            if ((viewTicketslLocalResult[i].Ticket_action).toLowerCase() === ("Solved").toLowerCase() && !types[viewTicketslLocalResult[i]]) {
              types[viewTicketslLocalResult[i].type] = true;
              count_solved_Ticket++;
            }
            if ((viewTicketslLocalResult[i].Ticket_priority).toLowerCase() === ("High").toLowerCase() && !types[viewTicketslLocalResult[i]]) {
                types[viewTicketslLocalResult[i].type] = true;
                count_High++;
              }
            if ((viewTicketslLocalResult[i].Ticket_priority).toLowerCase() === ("low").toLowerCase() && !types[viewTicketslLocalResult[i]]) {
                types[viewTicketslLocalResult[i].type] = true;
                count_Low++;
              } 
            if ((viewTicketslLocalResult[i].Ticket_priority).toLowerCase() === ("medium").toLowerCase() && !types[viewTicketslLocalResult[i]]) {
                types[viewTicketslLocalResult[i].type] = true;
                count_Medium++;
              } 
            if ((viewTicketslLocalResult[i].Ticket_priority).toLowerCase() === ("Urgent").toLowerCase() && !types[viewTicketslLocalResult[i]]) {
                types[viewTicketslLocalResult[i].type] = true;
                count_Urgent++;
            }  
           }
           return[count_New_Ticket, count_Answared, count_solved_Ticket, count_solved_Ticket, count_closed, count_UnAnswared]
      }

      viewById = (req_id) =>{
          alert("view"+req_id);
      }

      editById = (req_id) => {
        alert("edit"+req_id);
      }
      
      delById = (req_id) => {
        alert("del"+req_id);
      }




}


