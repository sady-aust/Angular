import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-studentcount',
  templateUrl: './studentcount.component.html',
  styleUrls: ['./studentcount.component.css']
})
export class StudentcountComponent implements OnInit {

  selectedRadioButton : String = 'all';
  
  @Output()
  radioButtonChanged:EventEmitter<String> = new EventEmitter();
 
  constructor() { }

  ngOnInit() {
  }

  onRadioButtonChange():void{
    this.radioButtonChanged.emit(this.selectedRadioButton);
    console.log(this.selectedRadioButton);
    
  }

}
