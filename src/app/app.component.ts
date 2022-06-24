import { Component, ElementRef, ViewChild } from '@angular/core';
import { BrowserModule,Title } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title:string="my-first-project";
  username:string="admin"
  password="admin1234"
  hello(){
    console.log("hello")
  }
  
  
  clickSubmit(username:string,password:string)
  {
    if(this.username==username&&this.password==password)
    {
      alert("Login succesfully as "+username);
    }else{
      alert("Invalid username and password");
    }
    
   //console.log("hello")
  }
}
