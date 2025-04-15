import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { GoogleService } from '../oauth2/google.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private router = inject(Router)
  private googleService = inject(GoogleService);


  //toastr = inject(ToastrService)
  loginForm = new FormGroup({
    password : new FormControl(''),
    email : new FormControl('')
  })

  constructor() {
    //this.isLoggedIn();
  }

  onLoginSubmit() {
/*     this.authService.login(this.loginForm.value).subscribe({
    next: (data) => {
      this.loginValid = true;
      localStorage.setItem('token', data.access_token)
      this.router.navigate(['home']);
    },
    error: (err:any) => {
      this.loginValid = false
      console.log(err)
    }
    }); */
    }

    signInWithGoogle() {
      this.googleService.login()
    }

    isLoggedIn() {
/*       if(this.oAuthService.hasValidIdToken()) {
        console.log('islogged')
        this.router.navigate(['home'])
      }
      else{
        console.log('NOT LOGGED')
      } */
    }

    logout() {
/*       this.oAuthService.revokeTokenAndLogout();
      this.oAuthService.logOut();
      this.authService.logout() */
    }
}
