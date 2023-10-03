import { Component } from '@angular/core';
import { AppErrorModel } from 'src/app/core/models';
import { ProblemService } from 'src/app/core/services/problem.service';
import { ProblemModel } from 'src/app/features/problem/models/problem.model';

@Component({
  selector: 'app-problems-table',
  templateUrl: './problems-table.component.html',
  styleUrls: ['./problems-table.component.css'],
})
export class ProblemsTableComponent {
  page: number = 1;
  size: number = 20;
  timestamp: Date = new Date();
  problems: ProblemModel[] = [];
  hasMoreProblems: boolean = false;
  error: AppErrorModel | null = null;

  constructor(public problemService: ProblemService) {}

  ngOnInit(): void {
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
}
