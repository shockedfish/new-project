import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {

  issuer: 'https://accounts.google.com',

  redirectUri: 'https://shockedfish.github.io/new-project/dashboard',

  clientId: '65971421092-lhia59hujfh6a5ggjimpg66g32rci2sa.apps.googleusercontent.com',

  scope: 'openid profile email',

  strictDiscoveryDocumentValidation: false,

};
