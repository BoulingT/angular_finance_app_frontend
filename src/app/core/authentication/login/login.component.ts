import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LoginRequestModel} from "../model/LoginRequestModel";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {passwordValidator} from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @Input() isLoginFailed: boolean = false;
  @Output() login: EventEmitter<LoginRequestModel> = new EventEmitter();
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, passwordValidator()]],
    })
  }

  protected userLogin(): void {
    const userLoginRequest: LoginRequestModel = {
      email: this.loginForm.controls['email'].value,
      password: this.loginForm.controls['password'].value,
    }
    this.login.emit(userLoginRequest)
  }

  protected recruiterLogin(): void {
    const recruiterLoginRequest: LoginRequestModel = {
      email: 'recruiter@gmail.com',
      password: 'RecruiterManger75*'
    }
    this.login.emit(recruiterLoginRequest);
  }
}
