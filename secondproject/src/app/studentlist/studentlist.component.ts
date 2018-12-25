import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {

  currentRadioButton:String = "all";
  studentList: any[];
  constructor() { 
    this.studentList =[
      {code:"101",gender:"male" ,name:"Sady","Cgpa":3.5},
      {code:"102", gender:"male",name:"Rahim","Cgpa":3.2},
      {code:"103",gender:"male" ,name:"Karim","Cgpa":3.3},
      {code:"104",gender:"female" ,name:"Rahima","Cgpa":3.3},
      {code:"104",gender:"female" ,name:"Rahima","Cgpa":3.3},
      {code:"104",gender:"female" ,name:"Rahima","Cgpa":3.3}
    ];
  }
  ngOnInit() {
  }

  changeTable(value:String):void{
    this.currentRadioButton = value;
  }

}
