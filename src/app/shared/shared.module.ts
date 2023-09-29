import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPONENTS } from './components';
import { LoginButtonComponent } from './components/button/login-button/login-button.component';
import { LogoutButtonComponent } from './components/button/logout-button/logout-button.component';
import { SignupButtonComponent } from './components/button/signup-button/signup-button.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { RouterModule } from '@angular/router';
import { NavbarCanvasComponent } from './components/navbar/navbar-canvas/navbar-canvas.component';
import { NavbarCanvasSignedInComponent } from './components/navbar/navbar-canvas/navbar-canvas-signed-in/navbar-canvas-signed-in.component';
import { NavbarCanvasNotSignedInComponent } from './components/navbar/navbar-canvas/navbar-canvas-not-signed-in/navbar-canvas-not-signed-in.component';

@NgModule({
  declarations: [
    ...COMPONENTS,
    LoginButtonComponent,
    LogoutButtonComponent,
    SignupButtonComponent,
    AvatarComponent,
    ClickOutsideDirective,
    NavbarCanvasComponent,
    NavbarCanvasSignedInComponent,
    NavbarCanvasNotSignedInComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [...COMPONENTS],
})
export class SharedModule {}
