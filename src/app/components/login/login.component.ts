import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccessToken } from 'src/app/interfaces/user-token';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public formLogin: FormGroup;
  public showError = false;

  constructor(private loginService: LoginService, private router: Router) {
    this.formLogin = this.getFormLogin();
  }

  getFormLogin(): FormGroup {
    return new FormGroup({
      email: new FormControl('', [Validators.min(3), Validators.required]),
      password: new FormControl('', [Validators.min(3), Validators.required]),
    });
  }

  get email() {
    return this.formLogin.get('email');
  }

  get password() {
    return this.formLogin.get('password');
  }

  onLogin(): void {
    if (this.email?.invalid || this.password?.invalid) {
      this.email?.markAsDirty();
      this.password?.markAsDirty();
      return;
    }

    this.loginService.auth(this.email?.value, this.password?.value).subscribe({
      next: (result: AccessToken) => {
        this.loginService.saveAccessToken(result)
        this.router.navigate([''])
      },
      error: (error: HttpErrorResponse) => {
        console.error(
          'Ocorreu um erro ao tentar fazer o login:',
          error.message
        );
        this.showError = true;
      },
    });
  }
}
