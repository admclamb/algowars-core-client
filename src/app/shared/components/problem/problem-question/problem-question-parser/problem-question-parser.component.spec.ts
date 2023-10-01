import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemQuestionParserComponent } from './problem-question-parser.component';

describe('ProblemQuestionParserComponent', () => {
  let component: ProblemQuestionParserComponent;
  let fixture: ComponentFixture<ProblemQuestionParserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProblemQuestionParserComponent]
    });
    fixture = TestBed.createComponent(ProblemQuestionParserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
