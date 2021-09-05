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
  loginFailed: boolean = false;

  constructor(private router: Router, private loginService: LoginService) {
  }

  ngOnInit(): void {
  }


  public login(username: String): boolean {
    var user: User | undefined;
    this.loginService.submitLoginDetails(username).subscribe(e => {
      user = e;
    });

    if (user !== undefined) {
      this.router.navigate(['/profile/' + user.id]);
    } else {
      this.loginFailed = true;
    }

    return false;
  }

}
