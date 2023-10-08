import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemsTablePaginatorComponent } from './problems-table-paginator.component';

describe('ProblemsTablePaginatorComponent', () => {
  let component: ProblemsTablePaginatorComponent;
  let fixture: ComponentFixture<ProblemsTablePaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProblemsTablePaginatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProblemsTablePaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
