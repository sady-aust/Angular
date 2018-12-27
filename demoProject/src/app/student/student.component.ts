import { Component, OnInit } from '@angular/core';
import { IStudent } from './istudent';
import { StudentService } from './student.service';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  providers:[StudentService]
})
export class StudentComponent implements OnInit {
  students:IStudent[];
  selectedEmployeeCountRadioButton : String = "all";
  constructor(private _studentService:StudentService) {
  
   }

   getEmployees():void{
    this.students = [
     
    ];
   }

   trackByStudentCode(index:number,student:any):String{
     return student.code;
   }


   getTotalStudents():number{
     return this.students.length;
   }

   getTotalMale():number{
     return this.students.filter(e=>e.gender === "Male").length;
   }

   getTotalFemale():number{
    return this.students.filter(e=>e.gender === "Female").length;
  }

  onEmployeeCountRadioButtonChanged(SelectedRadioButtonValue:String):void{
    this.selectedEmployeeCountRadioButton = SelectedRadioButtonValue;
  }

  ngOnInit() {
    this.students = this._studentService.getStudents();
  }

}
