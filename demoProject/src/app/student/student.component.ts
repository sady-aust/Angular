import { Component, OnInit } from '@angular/core';
import { IStudent } from './istudent';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students:IStudent[];
  selectedEmployeeCountRadioButton : String = "all";
  constructor() {
    this.students = [
      {code:"stu101",name:"Rahim",gender:"Male",TotalMarks:80,cgpa:3.5},
      {code:"stu102",name:"Karim",gender:"Male",TotalMarks:70,cgpa:3.25},
      {code:"stu103",name:"Abdul",gender:"Male",TotalMarks:60,cgpa:3.0},
      {code:"stu104",name:"Sabila",gender:"Female",TotalMarks:90,cgpa:4.0},
    ];
   }

   getEmployees():void{
    this.students = [
      {code:"stu101",name:"Rahim",gender:"Male",TotalMarks:80,cgpa:3.5},
      {code:"stu102",name:"Karim",gender:"Male",TotalMarks:70,cgpa:3.25},
      {code:"stu103",name:"Abdul",gender:"Male",TotalMarks:60,cgpa:3.0},
      {code:"stu104",name:"Sabila",gender:"Female",TotalMarks:90,cgpa:4.0},
      {code:"stu105",name:"Shakib",gender:"Male",TotalMarks:90,cgpa:4.0},
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
  }

}
