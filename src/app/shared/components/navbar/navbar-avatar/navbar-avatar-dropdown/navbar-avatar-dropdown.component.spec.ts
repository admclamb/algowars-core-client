import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarAvatarDropdownComponent } from './navbar-avatar-dropdown.component';

describe('NavbarAvatarDropdownComponent', () => {
  let component: NavbarAvatarDropdownComponent;
  let fixture: ComponentFixture<NavbarAvatarDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarAvatarDropdownComponent]
    });
    fixture = TestBed.createComponent(NavbarAvatarDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
