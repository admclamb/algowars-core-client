import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarAvatarComponent } from './navbar-avatar.component';
import { NavbarAvatarDropdownComponent } from './navbar-avatar-dropdown/navbar-avatar-dropdown.component';

@NgModule({
  declarations: [NavbarAvatarComponent, NavbarAvatarDropdownComponent],
  imports: [CommonModule],
})
export class NavbarAvatarModule {}
