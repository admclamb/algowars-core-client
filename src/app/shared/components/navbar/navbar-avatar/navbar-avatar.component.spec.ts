import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarAvatarComponent } from './navbar-avatar.component';

describe('NavbarAvatarComponent', () => {
  let component: NavbarAvatarComponent;
  let fixture: ComponentFixture<NavbarAvatarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarAvatarComponent]
    });
    fixture = TestBed.createComponent(NavbarAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
