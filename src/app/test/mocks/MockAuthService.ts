import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MockAuthService {
  isLoggedIn: boolean;
  userSession: object;
  currentApplication: object;

  constructor(
    isLoggedIn: boolean,
    userSession: object,
    currentApplication: object
  ) {
    this.isLoggedIn = isLoggedIn;
    this.userSession = userSession;
    this.currentApplication = currentApplication;
  }

  loginWithRedirect({}: object): void {}

  logout({}: object): void {}
}
