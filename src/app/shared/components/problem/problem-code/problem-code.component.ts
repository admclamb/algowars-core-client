import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-problem-code',
  templateUrl: './problem-code.component.html',
  styleUrls: ['./problem-code.component.css'],
})
export class ProblemCodeComponent {
  @Input() code!: string;

  sanitizedCode!: SafeHtml;

  constructor(private sanitizer: DomSanitizer) {}

  onCodeChanged(value: any) {
    console.log('CODE', value);
  }
}
