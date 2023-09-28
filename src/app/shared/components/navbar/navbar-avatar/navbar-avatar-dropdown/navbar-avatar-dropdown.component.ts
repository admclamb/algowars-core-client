import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navbar-avatar-dropdown',
  templateUrl: './navbar-avatar-dropdown.component.html',
})
export class NavbarAvatarDropdownComponent {
  user$ = this.auth.user$;

  constructor(private auth: AuthService) {}
}
