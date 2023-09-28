import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignedInNavComponent } from './signed-in-nav.component';
import { SharedModule } from 'src/app/shared/shared.module';

describe('SignedInNavComponent', () => {
  let component: SignedInNavComponent;
  let fixture: ComponentFixture<SignedInNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [SharedModule],
    });
    fixture = TestBed.createComponent(SignedInNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
