import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {LoginRequestModel} from "./model/LoginRequestModel";
import {Observable, tap} from "rxjs";
import {AuthResponse} from "./model/AuthResponse";
import {JwtTokenDecoded} from "./model/JwtTokenDecoded";
import {User} from "./model/User";
import {JwtHelperService} from "@auth0/angular-jwt";
import {RegisterRequestModel} from "./model/RegisterRequestModel";
import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl + '/authentication';

  constructor(private httpClient: HttpClient) {
  }

  login(requestBody: LoginRequestModel): Observable<AuthResponse> {
    const url = `${environment.apiUrl}/login`;

    return this.httpClient.post<AuthResponse>(url, requestBody).pipe(
      tap((response: AuthResponse) => {
        this.storeToken(response.accessToken);
        this.storeRefreshToken(response.refreshToken);
        this.storeUserInfoFromJwtToken(response.accessToken)
      })
    );
  }

  register(requestBody: RegisterRequestModel): Observable<AuthResponse> {
    const url = `${environment.apiUrl}/register`;

    return this.httpClient.post<AuthResponse>(url, requestBody).pipe(
      tap((response: AuthResponse) => {
        this.storeToken(response.accessToken);
        this.storeRefreshToken(response.refreshToken);
        this.storeUserInfoFromJwtToken(response.accessToken)
      })
    );
  }

  getToken(): string | null {
    return localStorage.getItem("accessToken");
  }

  getUserInfo(): User | null {
    const user: string | null = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
  }

  private storeToken(accessToken: string): void {
    localStorage.setItem("accessToken", accessToken);
  }

  private storeRefreshToken(refreshToken: string) {
    localStorage.setItem("refreshToken", refreshToken);
  }

  private storeUserInfoFromJwtToken(accessToken: string) {
    const decodedToken = this.getDecodedAccessToken(accessToken);
    if (decodedToken) {
      const user: User = {
        id: decodedToken.id,
        email: decodedToken.email,
        firstName: decodedToken.firstName,
        lastName: decodedToken.lastName,
        role: decodedToken.role,
      }
      localStorage.setItem("user", JSON.stringify(user));
    }
  }

  private getDecodedAccessToken(token: string): JwtTokenDecoded | null {
    const helper = new JwtHelperService();
    return helper.decodeToken(token);
  }
}

export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null; // Return null if there's no value (form control is empty)
    }

    const passwordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value);

    return !passwordValid ? {passwordStrength: true} : null;
  };
}
