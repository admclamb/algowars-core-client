import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { AppErrorModel } from 'src/app/core/models';
import { AccountService } from 'src/app/core/services/account.service';

@Component({
  selector: 'app-account-setup',
  templateUrl: './account-setup.component.html',
  styleUrls: ['./account-setup.component.css'],
})
export class AccountSetupComponent {
  user$ = this.auth.user$;
  userSub: string | null = null;
  accessToken: string | null = null;

  username: string = '';
  error: AppErrorModel | null = null;
  isLoading: boolean = false;

  constructor(
    private auth: AuthService,
    public accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.auth.user$.subscribe((user) => {
      if (user?.sub) {
        this.userSub = user?.sub;
      }
    });
    this.auth.getAccessTokenSilently().subscribe((accessToken) => {
      if (accessToken) {
        this.accessToken = accessToken;
      }
    });
  }

  submitAccount(event: Event) {
    event.preventDefault();
    this.isLoading = true;
    this.error = null;
    if (!this.username) {
      this.error = {
        message: 'Username cannot be empty',
      };
    } else if (!this.userSub) {
      this.error = {
        message: 'Error attempting to get user information',
      };
    } else if (!this.accessToken) {
      this.error = {
        message: 'Error getting access token',
      };
    } else {
      this.accountService
        .createAccount(this.username, this.userSub, this.accessToken)
        .subscribe((response) => {
          const { data, error } = response;
          if (data) {
            console.log(data);
          }
          if (error) {
            this.error = error;
          }
        });
    }
    this.isLoading = false;
  }
}
