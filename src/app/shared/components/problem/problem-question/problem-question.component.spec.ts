import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemQuestionComponent } from './problem-question.component';

describe('ProblemQuestionComponent', () => {
  let component: ProblemQuestionComponent;
  let fixture: ComponentFixture<ProblemQuestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProblemQuestionComponent]
    });
    fixture = TestBed.createComponent(ProblemQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
