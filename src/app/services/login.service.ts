import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { LoginForm } from '../interfaces/login-form.interface';
import { environment } from 'src/environments/environment.development';
import { tap } from 'rxjs';

const base_url: string = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(formData: LoginForm) {
    delete formData.remember;
    return this.http.post(`${base_url}/auth/login`, formData)
    .pipe(
      tap((resp: any) => {
        localStorage.setItem('token', resp.token);
      }  
      )
    );
  }

}
