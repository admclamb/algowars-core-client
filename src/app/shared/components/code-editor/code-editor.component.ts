import { Component, Input } from '@angular/core';
import { CodeModel } from '@ngstack/code-editor';

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.css'],
})
export class CodeEditorComponent {
  @Input() theme: string = 'vs-dark';
  @Input() model: CodeModel = {
    language: 'typescript',
    uri: 'main.ts',
    value: '',
    dependencies: ['@types/node', '@ngstack/translate', '@ngstack/code-editor'],
  };
  @Input() options = {
    contextMenu: true,
    minimap: {
      enabled: true,
    },
  };

  onCodeChange(value: string) {
    console.log('CODE', value);
  }
}
