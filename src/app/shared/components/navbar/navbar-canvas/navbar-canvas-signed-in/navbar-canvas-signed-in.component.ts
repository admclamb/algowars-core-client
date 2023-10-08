import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navbar-canvas-signed-in',
  templateUrl: './navbar-canvas-signed-in.component.html',
  styleUrls: ['./navbar-canvas-signed-in.component.css'],
})
export class NavbarCanvasSignedInComponent {
  user$ = this.auth.user$;
  constructor(private auth: AuthService) {}
}
