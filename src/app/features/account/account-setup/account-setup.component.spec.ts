import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSetupComponent } from './account-setup.component';

describe('AccountSetupComponent', () => {
  let component: AccountSetupComponent;
  let fixture: ComponentFixture<AccountSetupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountSetupComponent]
    });
    fixture = TestBed.createComponent(AccountSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
