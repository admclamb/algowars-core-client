import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProblemComponent } from './create-problem.component';

describe('CreateProblemComponent', () => {
  let component: CreateProblemComponent;
  let fixture: ComponentFixture<CreateProblemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProblemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
