import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { IUser } from './iuser';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GitapiService {
   myResponse:any;
  constructor(private _http: HttpClient) { }

  getUserInfo():Observable<IUser[]>{
   
     return this._http.get<IUser[]>("https://api.github.com/users/sady-aust/followers1")
            .pipe(catchError(this.handleError));
  }

  private handleError(errorResponse){
      if(errorResponse.error instanceof ErrorEvent){
        console.error("Client Side error "+errorResponse.error.message);
      }
      else{
        console.error("Server Side error "+errorResponse);
      }
     
      return throwError("There is a problem in loading data.")

     
  }
  
}

