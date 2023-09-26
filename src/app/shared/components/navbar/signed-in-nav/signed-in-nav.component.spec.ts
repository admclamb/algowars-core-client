import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignedInNavComponent } from './signed-in-nav.component';

describe('SignedInNavComponent', () => {
  let component: SignedInNavComponent;
  let fixture: ComponentFixture<SignedInNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignedInNavComponent]
    });
    fixture = TestBed.createComponent(SignedInNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
