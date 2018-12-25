import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'student'
})
export class StudentPipe implements PipeTransform {

  transform(value: String, gender:String): any {
   if(gender.toLocaleLowerCase() == 'male'){
     return "Mr. "+value;
   }
   else{
     return "Mrs. "+value;
   }
  }

}
