import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-student-count',
    templateUrl: './studentCount.component.html',
    styleUrls: ['./studentCount.component.css']
})
export class studentCount implements OnInit {
    @Input()
    all:number;

    @Input()
    male:number;

    @Input()
    female: number;

    selectedRadioButtonValue : String = "all";
    
    @Output()
    countRadioButtonSelectionChanged:EventEmitter<String> = new EventEmitter();


    constructor() { }

    ngOnInit(): void { }

    onRadioButtonSelectionChange(){
        this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
        console.log(this.selectedRadioButtonValue);
        
    }
}
