import{g as r,i as n}from"./chunk-DVSSUFTZ.js";import{$ as i,V as o,Va as e}from"./chunk-FTNGTGBB.js";var c={issuer:"https://accounts.google.com",redirectUri:"http://localhost:4200/dashboard",clientId:"65971421092-lhia59hujfh6a5ggjimpg66g32rci2sa.apps.googleusercontent.com",scope:"openid profile email",strictDiscoveryDocumentValidation:!1};var s=class t{oAuthService=i(n);router=i(r);profile=e(null);constructor(){this.initConfiguration()}initConfiguration(){this.oAuthService.configure(c),this.oAuthService.setupAutomaticSilentRefresh(),this.oAuthService.loadDiscoveryDocumentAndTryLogin().then(()=>{this.oAuthService.hasValidIdToken()&&(this.profile.set(this.oAuthService.getIdentityClaims()),this.router.navigate(["dashboard"]))})}login(){this.oAuthService.initImplicitFlow()}logout(){this.oAuthService.revokeTokenAndLogout(),this.oAuthService.logOut(),this.profile.set(null)}getProfile(){return this.profile()}static \u0275fac=function(a){return new(a||t)};static \u0275prov=o({token:t,factory:t.\u0275fac,providedIn:"root"})};export{s as a};
