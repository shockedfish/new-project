import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private router = inject(Router)
  private oAuthService = inject(OAuthService)
  private isAuthenticated: WritableSignal<boolean> = signal(false);

  constructor() { }

  isLoggedIn() {
    this.oAuthService.getIdentityClaims() ? this.isAuthenticated.set(true) : this.isAuthenticated.set(false)
    return this.isAuthenticated()
  }

/*   canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return fromPromise(this.oAuthService.loadDiscoveryDocumentAndTryLogin()).pipe(map(() => {

      if(this.oAuthService.hasValidIdToken()) { //or AccessToken
        console.log('authenticated');
        return true;
      }

      console.log('not authenticated');
      this.oAuthService.initImplicitFlow();

      return false;
    }));
  } */
}

/*  export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> => {
 return inject(AuthService).canActivate(next, state);
} */

