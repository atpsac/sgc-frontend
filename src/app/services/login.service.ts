import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { LoginForm } from '../interfaces/login-form.interface';
import { environment } from 'src/environments/environment.development';
import { Observable, catchError, tap, of } from 'rxjs';

const base_url: string = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  refreshToken() {
    const token = localStorage.getItem('token');
  }

  login(formData: LoginForm): Observable<boolean> {
    delete formData.remember;
    return this.http.post(`${base_url}/auth/login`, formData)
      .pipe(
        tap((resp: any) => {
          const { accessToken } = resp.tokens;
          localStorage.setItem('token', accessToken);
        }
        ),
        catchError((error) => {
          alert(error.error);
          return of(false);
        })
      );
  }
}