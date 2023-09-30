import { Component } from '@angular/core';
import { ProblemService } from 'src/app/core/services/problem.service';
import { ProblemModel } from '../problem/models/problem.model';
import { AppErrorModel } from 'src/app/core/models';

@Component({
  selector: 'app-problems',
  templateUrl: './problems.component.html',
  styleUrls: ['./problems.component.css'],
})
export class ProblemsComponent {
  page: number = 1;
  size: number = 20;
  timestamp: Date = new Date();
  problems: ProblemModel[] = [];
  hasMoreProblems: boolean = false;
  error: AppErrorModel | null = null;
  problemsAsString: string = '';

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
          this.problemsAsString = JSON.stringify(data);
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
