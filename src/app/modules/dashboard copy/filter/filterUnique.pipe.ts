import { PipeTransform, Pipe } from '@angular/core';
@Pipe({
    name: 'filterUnique',
    pure: false
  })
  export class filterUnique implements PipeTransform {
  
    transform( results_1:any[], args?: any): any {
  
      // Remove the duplicate elements
      console.log("Unique filter value");
    //   let uniqueArray = results_1.filter(function (el, index, array) { 
    //     return array.indexOf (el) == index;
    //   });
     results_1.forEach(function(data,index,array){
            console.log(data)
     })
  
      return ["A","B"];
    }
  }