import {
  Auth0ClientFactory,
  Auth0ClientService,
  AuthClientConfig,
  AuthConfig,
  AuthConfigService,
  AuthGuard,
  AuthService,
} from '@auth0/auth0-angular';
import { MockAuthService } from './MockAuthService';
import { ModuleWithProviders, NgModule } from '@angular/core';

export class MockAuthModule {
  static forRoot(config?: AuthConfig): ModuleWithProviders<MockAuthModule> {
    return {
      ngModule: MockAuthModule,
      providers: [
        AuthService,
        AuthGuard,
        {
          provide: AuthConfigService,
          useValue: config,
        },
        {
          provide: Auth0ClientService,
          useFactory: Auth0ClientFactory.createClient,
          deps: [AuthClientConfig],
        },
      ],
    };
  }
}
