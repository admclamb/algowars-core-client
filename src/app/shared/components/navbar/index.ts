import { NavbarAvatarDropdownComponent } from './navbar-avatar/navbar-avatar-dropdown/navbar-avatar-dropdown.component';
import { NavbarAvatarComponent } from './navbar-avatar/navbar-avatar.component';
import { NavbarCanvasNotSignedInComponent } from './navbar-canvas/navbar-canvas-not-signed-in/navbar-canvas-not-signed-in.component';
import { NavbarCanvasSignedInComponent } from './navbar-canvas/navbar-canvas-signed-in/navbar-canvas-signed-in.component';
import { NavbarCanvasComponent } from './navbar-canvas/navbar-canvas.component';
import { NavbarComponent } from './navbar.component';
import { NOT_SIGNED_IN_NAV_COMPONENTS } from './not-signed-in-nav';
import { SIGNED_IN_NAV_COMPONENTS } from './signed-in-nav';

export const NAVBAR_COMPONENTS = [
  NavbarComponent,
  ...NOT_SIGNED_IN_NAV_COMPONENTS,
  ...SIGNED_IN_NAV_COMPONENTS,
  NavbarAvatarComponent,
  NavbarAvatarDropdownComponent,
  NavbarCanvasComponent,
  NavbarCanvasNotSignedInComponent,
  NavbarCanvasSignedInComponent,
];
