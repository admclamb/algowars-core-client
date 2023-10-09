import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { COMPONENTS } from './components';
import { Auth0FeatureComponent } from './components/auth0-feature.component';
import { Auth0FeaturesComponent } from './components/auth0-features.component';
import { LoginButtonComponent } from './components/buttons/login-button.component';
import { LogoutButtonComponent } from './components/buttons/logout-button.component';
import { SignupButtonComponent } from './components/buttons/signup-button.component';
import { ProblemsTablePaginatorComponent } from './components/problems/problems-table-paginator/problems-table-paginator.component';
import { ProblemsTableOptionsComponent } from './components/problems/problems-table-options/problems-table-options.component';

@NgModule({
  declarations: [
    ...COMPONENTS,
    Auth0FeaturesComponent,
    Auth0FeatureComponent,
    LoginButtonComponent,
    LogoutButtonComponent,
    SignupButtonComponent,
    ProblemsTablePaginatorComponent,
    ProblemsTableOptionsComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [...COMPONENTS],
})
export class SharedModule {}
