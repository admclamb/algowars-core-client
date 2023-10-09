import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'textFormatting',
})
export class TextFormattingPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(inputText: string): SafeHtml {
    if (!inputText) {
      return '';
    }

    // Replace **text** with <strong>text</strong>
    inputText = inputText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    // Replace `code` with <code>code</code>
    inputText = inputText.replace(/`(.*?)`/g, '<code>$1</code>');

    // Replace %%text%% with <span class="text-light">text</span>
    inputText = inputText.replace(
      /%%(.*?)%%/g,
      '<span class="text-light">$1</span>'
    );

    // Sanitize the generated HTML content before returning
    return this.sanitizer.bypassSecurityTrustHtml(inputText);
  }
}
