import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemsTableOptionsComponent } from './problems-table-options.component';

describe('ProblemsTableOptionsComponent', () => {
  let component: ProblemsTableOptionsComponent;
  let fixture: ComponentFixture<ProblemsTableOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProblemsTableOptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProblemsTableOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
