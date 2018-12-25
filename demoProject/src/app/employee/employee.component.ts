import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  firstName:string = "Toufiqul";
  lastName:string = "Islam";
  age:string = "22";
  gender:string = "Male"
  columnSpan:number = 2;
  isShowDetails : Boolean = false;
  constructor() { }

  ngOnInit() {
  }

  toggleDetails():void{
    this.isShowDetails = !this.isShowDetails;
  }

}
