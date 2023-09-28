import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotSignedInNavComponent } from './not-signed-in-nav.component';
import { AuthModule, AuthService } from '@auth0/auth0-angular';
import { AuthServiceTestFixture } from 'src/app/test/test-fixtures/AuthTestFixtures';
import { SharedModule } from 'src/app/shared/shared.module';
import { MockAuthModule } from 'src/app/test/mocks/MockAuthModule';
import { MockAuthService } from 'src/app/test/mocks/MockAuthService';

describe('NotSignedInNavComponent', () => {
  let component: NotSignedInNavComponent;
  let fixture: ComponentFixture<NotSignedInNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        SharedModule,
        AuthModule.forRoot({
          domain: 'fake-domain.auth0.com',
          clientId: 'fake-id',
          authorizationParams: {
            redirect_uri: 'http://fakesite:4200',
          },
          errorPath: '/callback',
        }),
      ],
      providers: [{ provide: AuthService, useValue: MockAuthService }],
    });
    fixture = TestBed.createComponent(NotSignedInNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
