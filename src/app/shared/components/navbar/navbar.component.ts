import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private auth: AuthService) {}

  isAuthenticated$ = this.auth.isAuthenticated$;
  isCanvasOpen: boolean = false;

  toggleCanvas(): void {
    this.isCanvasOpen = !this.isCanvasOpen;
  }

  closeCanvas(): void {
    this.isCanvasOpen = false;
  }
}
