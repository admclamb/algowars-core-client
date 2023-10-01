import { Component, Input } from '@angular/core';
import { ProblemModel } from 'src/app/features/problem/models/problem.model';

@Component({
  selector: 'app-problem-question',
  templateUrl: './problem-question.component.html',
  styleUrls: ['./problem-question.component.css'],
})
export class ProblemQuestionComponent {
  @Input() problem: ProblemModel | null = null;
}
