import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  {RouterModule,Routes} from "@angular/router"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee/create-employee.component';

const appRoutes: Routes =[
  { path: "list",component: ListEmployeesComponent },
  { path: "create",component: CreateEmployeeComponent },
  { path: "",redirectTo: "/list",pathMatch:"full" }
];
@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes) // To let the router know about the routes configured above,
    // pass "appRoutes" constant to forRoot(appRoutes) method
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
