import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarAvatarDropdownComponent } from './navbar-avatar-dropdown.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthModule } from '@auth0/auth0-angular';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavbarAvatarDropdownComponent', () => {
  let component: NavbarAvatarDropdownComponent;
  let fixture: ComponentFixture<NavbarAvatarDropdownComponent>;

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
        RouterTestingModule,
      ],
    });
    fixture = TestBed.createComponent(NavbarAvatarDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
