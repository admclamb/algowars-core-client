import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-avatar',
  templateUrl: './navbar-avatar.component.html',
})
export class NavbarAvatarComponent {
  @Input() avatarUrl?: string = '/assets/images/avatar/default_avatar.jpg';
  @Input() width?: string = 'w-8';
  @Input() height?: string = 'w-8';
  @Input() id?: string = '';
  isDropdownOpen: boolean = false;

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  clickedOutside(): void {
    this.isDropdownOpen = false;
  }
}
