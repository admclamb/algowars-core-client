import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { AppErrorModel } from 'src/app/core/models';

@Component({
  selector: 'app-account-setup',
  templateUrl: './account-setup.component.html',
  styleUrls: ['./account-setup.component.css'],
})
export class AccountSetupComponent {
  user$ = this.auth.user$;

  username: string = '';
  error: AppErrorModel | null = null;
  isLoading: boolean = false;

  constructor(private auth: AuthService) {}

  submitAccount(event: Event) {
    event.preventDefault();
    this.isLoading = true;
    this.error = null;
    if (!this.username) {
      this.error = {
        message: 'Username cannot be empty',
      };
    }
    this.isLoading = false;
  }
}
