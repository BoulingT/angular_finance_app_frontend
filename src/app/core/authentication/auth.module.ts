import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthRoutingModule} from './auth-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "./auth.service";
import {AuthenticationComponent} from "./authentication-page/authentication.component";
import {LoginComponent} from "./login/login.component";


@NgModule({
  declarations: [
    AuthenticationComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
  ],
  providers: [AuthService]
})
export class AuthModule {
}
