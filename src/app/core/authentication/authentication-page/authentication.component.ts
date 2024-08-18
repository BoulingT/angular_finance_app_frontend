import {Component} from '@angular/core';
import {AuthService} from "../auth.service";
import {LoginRequestModel} from "../model/LoginRequestModel";
import {Router} from "@angular/router";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent {
  isLoginFailed: boolean = false;

  get loginStatus(): boolean {
    return this.isLoginFailed;
  }

  constructor(private authService: AuthService, private router: Router) {
  }

  onLogin(userLoginInfo: LoginRequestModel): void {
    this.authService.login(userLoginInfo).subscribe({
      next: () => {
        this.router.navigate(['/homepage']);
      },
      error: (err) => {
        this.isLoginFailed = false;
      }
    });
  }

  onRegister(): void {
  }


}
