import { Component, SimpleChanges } from '@angular/core';
import { AppErrorModel } from 'src/app/core/models';
import { ProblemService } from 'src/app/core/services/problem.service';
import { ProblemModel } from 'src/app/core/models/problem.model';

@Component({
  selector: 'app-problems-table',
  templateUrl: './problems-table.component.html',
})
export class ProblemsTableComponent {
  page: number = 1;
  size: number = 50;
  totalPages: number = 1;
  timestamp: Date = new Date();
  problems: ProblemModel[] = [];
  hasMoreProblems: boolean = false;
  error: AppErrorModel | null = null;

  constructor(public problemService: ProblemService) {}

  ngOnInit() {
    this.fetchProblems();
  }

  fetchProblems() {
    this.problemService
      .getProblems({
        page: this.page,
        size: this.size,
        timestamp: this.timestamp,
      })
      .subscribe((response) => {
        const { data, error } = response;
        if (data) {
          if (data?.results) {
            this.problems.push(...data.results);
          }
          if (data?.page >= data?.totalPages) {
            this.hasMoreProblems = false;
          }
        }
        if (error) {
          this.error = error;
        }
      });
  }

  changeSize(newSize: number) {
    this.size = newSize;
    this.problems = [];
    this.fetchProblems();
  }

  changePage(newPage: number) {
    this.page = newPage;
    this.fetchProblems();
  }
}
