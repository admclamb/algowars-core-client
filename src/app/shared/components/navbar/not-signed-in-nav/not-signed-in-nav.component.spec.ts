import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotSignedInNavComponent } from './not-signed-in-nav.component';

describe('NotSignedInNavComponent', () => {
  let component: NotSignedInNavComponent;
  let fixture: ComponentFixture<NotSignedInNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotSignedInNavComponent]
    });
    fixture = TestBed.createComponent(NotSignedInNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
