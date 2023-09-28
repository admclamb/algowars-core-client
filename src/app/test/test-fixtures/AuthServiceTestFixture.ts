import { AuthService } from '@auth0/auth0-angular';
import { MockAuthService } from '../mocks/MockAuthService';

export class AuthServiceTestFixture {
  public static mockNotLoggedIn(): MockAuthService {
    const mockedService = new MockAuthService(
      false,
      {
        issuer: 'https://not-real.okta.com',
        clientId: 'fake-client-id',
        redirectUri: 'http://localhost:4200',
      },
      {}
    );
    return mockedService;
  }

  public static mockOktaConfig(): object {
    return {
      issuer: 'https://not-real.okta.com',
      clientId: 'fake-client-id',
      redirectUri: 'http://localhost:4200',
    };
  }
}
