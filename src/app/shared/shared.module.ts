import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPONENTS } from './components';
import { Auth0Component } from './components/auth0/auth0.component';

@NgModule({
  declarations: [...COMPONENTS, Auth0Component],
  imports: [CommonModule],
  exports: [...COMPONENTS],
})
export class SharedModule {}
