import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarCanvasComponent } from './navbar-canvas.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthModule } from '@auth0/auth0-angular';
import { SharedModule } from 'src/app/shared/shared.module';

describe('NavbarCanvasComponent', () => {
  let component: NavbarCanvasComponent;
  let fixture: ComponentFixture<NavbarCanvasComponent>;

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
    fixture = TestBed.createComponent(NavbarCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
