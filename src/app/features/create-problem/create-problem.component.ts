import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-create-problem',
  templateUrl: './create-problem.component.html',
  styleUrls: ['./create-problem.component.css'],
})
export class CreateProblemComponent {
  title: string = '';
  question: string = '';
  @ViewChild('textareaRef') textareaRef!: ElementRef;

  updateTextarea() {
    const value = this.updateTextarea;
  }
}
