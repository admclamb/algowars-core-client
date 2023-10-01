import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemCodeComponent } from './problem-code.component';

describe('ProblemCodeComponent', () => {
  let component: ProblemCodeComponent;
  let fixture: ComponentFixture<ProblemCodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProblemCodeComponent]
    });
    fixture = TestBed.createComponent(ProblemCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
