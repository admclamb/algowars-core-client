import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarCanvasNotSignedInComponent } from './navbar-canvas-not-signed-in.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthModule } from '@auth0/auth0-angular';
import { SharedModule } from 'src/app/shared/shared.module';

describe('NavbarCanvasNotSignedInComponent', () => {
  let component: NavbarCanvasNotSignedInComponent;
  let fixture: ComponentFixture<NavbarCanvasNotSignedInComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
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
    fixture = TestBed.createComponent(NavbarCanvasNotSignedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
