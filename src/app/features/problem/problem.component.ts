import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProblemModel } from './models/problem.model';
import { ProblemService } from 'src/app/core/services';
import { AppErrorModel } from 'src/app/core/models';

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.css'],
})
export class ProblemComponent {
  problem: ProblemModel | null = null;
  error: AppErrorModel | null = null;

  constructor(
    private route: ActivatedRoute,
    public problemService: ProblemService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const problemId = params.get('problemId');
      if (problemId) {
        this.problemService
          .getProblemById(parseInt(problemId))
          .subscribe((response) => {
            const { data, error } = response;
            if (data) {
              this.problem = data;
            }
            if (error) {
              this.error = error;
            }
          });
      }
    });
  }
}
