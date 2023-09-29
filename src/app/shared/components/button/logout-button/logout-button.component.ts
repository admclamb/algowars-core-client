import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-logout-button',
  template: `
    <button [class]="class" (click)="handleLogout()">Log Out</button>
  `,
})
export class LogoutButtonComponent {
  @Input() class: string = 'px-3 py-2';

  constructor(
    private auth: AuthService,
    @Inject(DOCUMENT) private doc: Document
  ) {}

  handleLogout(): void {
    this.auth.logout({
      logoutParams: {
        returnTo: this.doc.location.origin,
      },
    });
  }
}
