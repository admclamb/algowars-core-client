import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppErrorModel } from 'src/app/core/models';

@Component({
  selector: 'app-error-alert',
  templateUrl: './error-alert.component.html',
  styleUrls: ['./error-alert.component.css'],
})
export class ErrorAlertComponent {
  @Input() error: AppErrorModel | null = null;
  @Input() class: string = '';
  @Input() showClose: boolean = false;
  @Output() closeError: EventEmitter<void> = new EventEmitter<void>();

  setError() {
    this.closeError.emit();
  }
}
