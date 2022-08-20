import { Component, OnInit,Input,Output,EventEmitter, OnChanges,SimpleChanges,ViewChild,ElementRef  } from '@angular/core';
import { edit_view_delService } from '../../../data/service/edit_view_del.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: 'popup-module',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class popup implements OnInit, OnChanges{
  

  @Input('edit_view_del_related_event') edit_view_del_related_event: Boolean;
  @Input('edit_view_del_related_req_id') edit_view_del_related_req_id: Number;
  @Input('edit_view_del_related_req_type') edit_view_del_related_req_type: Number;

  /* this.edit_view_del_related_req_type related variable for form property change */
  public property_type:Object = {};
  /* this.edit_view_del_related_req_type related variable for form property change */

  propChanges: any;

      /* Data regarding applicant related variable added on 09/09/2020 */
        /* Addprofil section */
          form: FormGroup;
        /* Addprofil section */
        public viewchatResult: any[] = [];
      /* Data regarding applicant related variable added on 09/09/2020 */

        constructor(private _http:edit_view_delService,public fb: FormBuilder){
         // console.log(this.edit_view_del_related_event)
  
        }
        ngOnInit() {
          this.form = this.fb.group({
            Ticket_id:[ '', Validators.required],
            Ticket_status:[ '', Validators.required],
            Ticket_closingn_date:[ '', Validators.required],
            Ticket_priority:[ '', Validators.required],
            Ticket_action:[ '', Validators.required],
            Ticket_description:[ '', Validators.required],
            Ticket_chat_group_id:[ '', Validators.required],
            User_id:[ '', Validators.required],
            User_name:[ '', Validators.required],
            Ticket_incident_type:[ '', Validators.required],
            Ticket_catagory:['',[Validators.required]],
            Ticket_sub_catagory:['', Validators.required],
            Location:['', Validators.required],
            Ticket_creation_date:['', Validators.required],               
        })
       
        }

        ngOnChanges(changes: SimpleChanges) {
          this.propChanges = changes;
          console.log(this.edit_view_del_related_event)
          console.log(this.edit_view_del_related_req_id)
          console.log(this.edit_view_del_related_req_type)
          console.log(this.propChanges);
          let _Url = "http://localhost:5000/api/viewticketbyid"
          this.getDataforform({"ticket_id":this.edit_view_del_related_req_id},_Url)
          this.getchatHistoryforchat({"id":"5f4e43ce9419c451d036094a"},"http://localhost:5000/api/viewchathistory")
          this.form_property_change_on_req_type(this.edit_view_del_related_req_type)
        }
        close_modal_button(){
          this.edit_view_del_related_event = false
        }
        getDataforform = (params,_Url) =>{
            this._http.postData(params,_Url).subscribe(
              res =>{
               // console.log(res['data'].ticket_status)
                this.function_set_form_value(res['data'][0])
                },
              error => {
                //console.log(error)
              }
              )
        }
        getchatHistoryforchat = (params,_Url) =>{
          this._http.postData(params,_Url).subscribe(
            res =>{
              console.log(res['data'])
              console.log(res['status'])
              if(res['status']===201)
              this.viewchatResult = res['data']
              },
            error => {
              console.log(error)
            }
            )
      }
        function_set_form_value = (params) =>{
                this.form.get('Ticket_status').setValue(params['ticket_status']);
                this.form.get('Ticket_closingn_date').setValue(params['ticket_closingn_date']);
                this.form.get('Ticket_priority').setValue(params['ticket_priority']);
                this.form.get('Ticket_action').setValue(params['ticket_action']);
                this.form.get('Ticket_description').setValue(params['ticket_description']);
                this.form.get('User_id').setValue(params['userid']);
                this.form.get('User_name').setValue(params['username']);
                this.form.get('Ticket_incident_type').setValue(params['ticket_incident_type']);
                this.form.get('Ticket_catagory').setValue(params['ticket_catagory']);
                this.form.get('Ticket_sub_catagory').setValue(params['ticket_sub_catagory']);
                this.form.get('Location').setValue(params['location']);
                this.form.get('Ticket_creation_date').setValue(params['ticket_creation_date']);
                this.form.get('Ticket_id').setValue(params['id']);
        }

        form_property_change_on_req_type = (params) =>{
          if(params===2)
            this.property_type = {
              "button_property":"visible",
              "button_text" : "Update",
              "form_field_property" : false
            }
          if(params===3)
            this.property_type = {
              "button_property":"visible",
              "button_text" : "Delete",
              "form_field_property" : true
            }
          if(params===1)
            this.property_type = {
              "button_property":"hidden",
              "button_text" : "View",
              "form_field_property" : true
            } 

        }

  submitForm() {

    }
/* form submit section */
}
