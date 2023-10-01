import { Component, Input } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @Input() maxWidth: string = 'max-w-4xl';
  @Input() padding: string = 'py-5 px-3 lg:px-0';
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
