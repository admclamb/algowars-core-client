import { Component, Input } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login-button',
  template: ` <button [class]="class" (click)="handleLogin()">Log in</button> `,
})
export class LoginButtonComponent {
  @Input() class: string = 'px-3 py-2';

  constructor(private auth: AuthService) {}

  handleLogin(): void {
    this.auth.loginWithRedirect({
      appState: {
        target: '/',
      },
      authorizationParams: {
        prompt: 'login',
      },
    });
  }
}
