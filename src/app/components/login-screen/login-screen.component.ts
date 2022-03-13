import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { LoginService } from 'src/app/services/sources/login.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {
  public loginFailed: boolean = false;

  constructor(private router: Router, private loginService: LoginService) {
  }

  ngOnInit(): void {
  }

  public login(email: String): void {
    this.loginService.submitLoginDetails(email)
      .then(user => this.loginSuccess(user))
      .catch((error: HttpErrorResponse) => {
        this.loginFailed = true;
      });
  }

  private loginSuccess(user: User): void {
    this.router.navigate(['/profile', user.id]);
  }
}
