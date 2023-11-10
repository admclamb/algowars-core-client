import {
  Component,
  ElementRef,
  Input,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.css'],
})
export class CodeEditorComponent {
  @Input() code: string = `const test = (name) => {
  return "hello " + name + ", how are you?"  
}`;

  caretPosition: number | null = null;

  @ViewChild('childTextarea') childTextareaRef!: ElementRef;

  constructor(private sanitizer: DomSanitizer) {}

  onTextareaChange(event: Event) {
    const value = (event.target as any).value;
    this.code = value;
    console.log('POSITION: ', this.getCaretPosition());
  }

  formatCode(code: string): SafeHtml[] {
    const lines = code.split('\n');
    return lines.map((line) => this.sanitizer.bypassSecurityTrustHtml(line));
  }

  focusOnCode(event: Event) {
    this.childTextareaRef.nativeElement.focus();
  }

  getCaretPosition(): number {
    return this.childTextareaRef.nativeElement.selectionStart;
  }

  updateCaretPosition() {}
}
