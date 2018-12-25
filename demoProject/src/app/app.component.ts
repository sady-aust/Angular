import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  projectName : string = 'Employee Details';
  title = 'demoProject';
  image:String = "https://angular.io/assets/images/logos/angular/angular.svg";
  firstName:String = "Toufiqul";
  lastName:String = "Islam";
  classToApply : String = "boldClass italicsClass";
  applyBoldClass:Boolean = false;
  applyItalicClass:Boolean = true;
  isDisabled:Boolean = false;
  badHtml :String = 'Hello <script>alert("Hacked")</script>';
  isBold : Boolean = true;
  fontSize:number = 30;
  isItalic:boolean = true;

  inputValue : String = 'Toufiqul Islam';

  getFullName():String{
    return this.firstName +" "+this.lastName;
  }

  addClasses(){
    let classes = {
      boldClass: this.applyBoldClass,
      italicsClass: this.applyItalicClass
    }

    return classes;
  }

  addStyle(){
    let styles = {
      'font-size.px':this.fontSize,
      'font-style':this.isItalic? "italic":"normal",
      'font-weight':this.isBold? 'bold':'normal'
    }

    return styles;
  }
  onClick():void{
    console.log("Button CLicked");
    
  }
}
