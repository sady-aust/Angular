import { Injectable } from '@angular/core';
import { IStudent } from './istudent';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  getStudents():IStudent[]{
    return [
      {code:"stu101",name:"Rahim",gender:"Male",TotalMarks:80,cgpa:3.5},
      {code:"stu102",name:"Karim",gender:"Male",TotalMarks:70,cgpa:3.25},
      {code:"stu103",name:"Abdul",gender:"Male",TotalMarks:60,cgpa:3.0},
      {code:"stu104",name:"Sabila",gender:"Female",TotalMarks:90,cgpa:4.0},
      {code:"stu105",name:"Shakib",gender:"Male",TotalMarks:90,cgpa:4.0},
    ];
  }
}
