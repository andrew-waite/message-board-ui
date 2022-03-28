import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { LoginService } from 'src/app/services/sources/login.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {
  public loginFailed: boolean = false;
  public loginErrorMessage: String = "";

  constructor(private router: Router, private loginService: LoginService) {
  }

  ngOnInit(): void {
    var alert = $("#loginAlert");    
    alert.on("close.bs.alert", function () {
      alert.hide(); //hide the alert
      return false; //don't remove it from DOM
    });
  }

  public login(email: string): void {
    this.loginService.submitLoginDetails(email)
      .then(user => this.loginSuccess(user))
      .catch((error: HttpErrorResponse) => {
        this.loginErrorMessage = error.message;
        this.loginFailed = true;
      });
  }

  private loginSuccess(user: User): void {
    this.router.navigate(['/profile', user.id]);
  }
}
