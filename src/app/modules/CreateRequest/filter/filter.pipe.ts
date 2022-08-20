import { PipeTransform, Pipe } from '@angular/core';
import { posts } from 'src/app/data/schema/posts';

@Pipe({
    name:'eogo_Filter'
})
export class eogo_Filter implements PipeTransform{
    transform(
            results_1:any[],                // Data_set
            request_no:string,              // request no
            role:string,                    // role 
            country?:string,                // conuntry
            skills?:string,                 // skills
            practice?:string,               // practice
            customergroup?:string           //customergroup
            ):any[]{
        if (!results_1) return []; 

         if (!request_no){
            results_1 = results_1; 
         } 
         else{
            results_1 = [...results_1.filter(data=>data['Request_Id'].toString().includes(request_no))]
         }
       
         
         if (!role) {
            results_1 = results_1;
         }
         else
         {
            results_1 = [...results_1.filter(data=>data['Role'].toString().toUpperCase().includes(role.toUpperCase()))]    
         }

         if (!country) {
            results_1 = results_1;
         }
         else
         {
            results_1 = [...results_1.filter(data=>data['Country'].toString().toUpperCase().includes(country.toUpperCase()))]    
         }

         
         if (!skills) {
            results_1 = results_1;
         }
         else
         {
            results_1 = [...results_1.filter(data=>data['Skills'].toString().toUpperCase().includes(skills.toUpperCase()))]    
         }

         if ((!practice)||(practice=="all")) {
            results_1 = results_1;
            console.log("all in practice");
         }
         else
         {
            results_1 = [...results_1.filter(data=>data['Practice'].toString().toUpperCase().includes(practice.toUpperCase()))]    
        
         }


         /* need to be done for the group section */

         if ((!customergroup)||(customergroup=="all")) {
            results_1 = results_1;
            console.log("all in customergroup");
         }
         else
         {
            results_1 = [...results_1.filter(data=>data['Customer_Group'].toString().toUpperCase().includes(customergroup.toUpperCase()))]    
         }
      
          /* need to be done for the group section */
      
          console.log(results_1)

        return results_1;
    }
}