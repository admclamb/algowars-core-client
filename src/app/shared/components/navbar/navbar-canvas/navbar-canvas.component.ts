import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navbar-canvas',
  templateUrl: './navbar-canvas.component.html',
  styleUrls: ['./navbar-canvas.component.css'],
})
export class NavbarCanvasComponent {
  @Input() isOpen: boolean = false;
  @Output() closeCanvasEvent = new EventEmitter<void>();
  user$ = this.auth.user$;
  isAuthenticated$ = this.auth.isAuthenticated$;

  constructor(private auth: AuthService) {}

  closeCanvas() {
    this.closeCanvasEvent.emit();
  }
}
