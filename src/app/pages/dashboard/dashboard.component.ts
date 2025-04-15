import { Component, inject, OnInit } from '@angular/core';
import { GoogleService } from '../../core/auth/oauth2/google.service';
import { OAuthService } from 'angular-oauth2-oidc';
import { AuthService } from '../../core/auth/auth.service';
import { Router } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgxSpinnerModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{

  private googleService = inject(GoogleService);
  private oAuthService = inject(OAuthService);
  private authService = inject(AuthService);
  private router = inject(Router)
  profile = this.googleService.profile();
  isLogged = false;

  ngOnInit(): void {
    setTimeout(() => {
      console.log('profile', this.oAuthService.getIdentityClaims())
      this.oAuthService.getIdentityClaims() ? this.isLogged = true : this.isLogged = false
      this.isLogged == false ? this.redirectToLogin() : ''
    }, 200);

  }

  redirectToLogin() {
    this.router.navigate(['login'])
  }

  logoutGoogle() {
      this.oAuthService.revokeTokenAndLogout();
      this.oAuthService.logOut();
      this.redirectToLogin()
  }

}
