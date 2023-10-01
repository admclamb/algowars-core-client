import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-problem-question-parser',
  templateUrl: './problem-question-parser.component.html',
  styleUrls: ['./problem-question-parser.component.css'],
})
export class ProblemQuestionParserComponent {
  @Input() question: string = '';
}
