import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public formSubmitted = false;

  public loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    remember: [false]
  });

  constructor(
    private router: Router,
    private formBuilder: NonNullableFormBuilder,
    private loginService: LoginService
    ) {

  }

  login() {
    this.loginService.login(this.loginForm.value)
    .subscribe({
      next: (resp) => {
        if (this.loginForm.get('remember')?.value) {

        }
      },
      error: (error) => {
        const {message: errorMessage} = error.error;
        Swal.fire('Error', errorMessage, 'error')
      }
    })
    //this.router.navigateByUrl('/');
  }

}
