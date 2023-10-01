import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemTestComponent } from './problem-test.component';

describe('ProblemTestComponent', () => {
  let component: ProblemTestComponent;
  let fixture: ComponentFixture<ProblemTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProblemTestComponent]
    });
    fixture = TestBed.createComponent(ProblemTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
