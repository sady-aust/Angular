import { Component, OnInit } from '@angular/core';
import { GitapiService } from './gitapi.service';
import { IUser } from './iuser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  title = 'simplegitapiproject';
  statusMessage:String = "Loading Data.Please Wait...";
  users:IUser[];
  constructor(private _myGitApiService:GitapiService){

  }

  ngOnInit(): void {
    console.log("Calling");
    this._myGitApiService.getUserInfo().subscribe(observer=>this.users = observer,(error)=>{
    
      
      this.statusMessage = error;
    });
   
    
    
  }

}
