import { Component, Input } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { TextFormattingPipe } from 'src/app/core/pipes/text-formatting.pipe';

@Component({
  selector: 'app-problem-question-parser',
  templateUrl: './problem-question-parser.component.html',
  styleUrls: ['./problem-question-parser.component.css'],
})
export class ProblemQuestionParserComponent {
  @Input() question: string = '';

  sanitizedHtml!: SafeHtml;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnChanges() {
    let formattedText: any = this.question;
    formattedText = formattedText.replace(
      /\*\*(.*?)\*\*/g,
      '<strong>$1</strong>'
    );
    formattedText = formattedText.replace(
      /`(.*?)`/g,
      '<code class="border border-slate-600 px-0.5 bg-slate-700 rounded inline-block">$1</code>'
    );
    formattedText = formattedText.replace(
      /%%(.*?)%%/g,
      '<span class="text-slate-400">$1</span>'
    );

    const correctedString = formattedText.replace(/\\n/g, '\n');
    const lines: string[] = correctedString.split('\n');
    console.log(lines);
    const formattedLines = lines.map((line) => {
      if (line[0] === '>') {
        return (line = `<blockquote class="pl-3 border-l-2 border-slate-600">${line.substring(
          1
        )}</blockquote>`);
      }
      return line;
    });

    // Sanitize the modified HTML content
    this.sanitizedHtml = this.sanitizer.bypassSecurityTrustHtml(
      formattedLines.join('\n')
    );
  }
}
