import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent   {

  onSubmit(email:string, password:string) {
    if(email.length != 0 && password.length != 0) {
      window.location.href="accounts";
    }
  }
}
