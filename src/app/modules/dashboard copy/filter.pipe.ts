import { PipeTransform, Pipe } from '@angular/core';
import { posts } from 'src/app/data/schema/posts';

@Pipe({
    name:'eogo_Filter'
})
export class eogo_Filter implements PipeTransform{
    transform(
            results_1:any[],                // Data set
            request_no:string,              // request no
            role:string,                    // role 
            country?:string,                // conuntry
            skills?:string,                 // skills
            vdu?:string,
            customergroup?:string,
            practice?:string,
            primaryskills?:string,
            noofposition?:string,
            joblocation?:string
            ):any[]{
        if (!results_1) return []; 
        
        console.log(role)
        console.log(request_no)
        console.log(country)
        console.log(skills)
        console.log(practice)
       
         console.log(results_1)
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
      
      
         console.log(results_1)

        return results_1;
    }
}