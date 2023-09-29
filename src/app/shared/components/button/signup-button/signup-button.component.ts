import { Component, Input } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-signup-button',
  template: `
    <button [class]="class" (click)="handleSignUp()">Sign up</button>
  `,
})
export class SignupButtonComponent {
  @Input() class: string = 'px-3 py-2';

  constructor(private auth: AuthService) {}

  handleSignUp(): void {
    this.auth.loginWithRedirect({
      appState: {
        target: '/',
      },
      authorizationParams: {
        prompt: 'login',
        screen_hint: 'signup',
      },
    });
  }
}
