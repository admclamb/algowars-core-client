import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { AppErrorModel } from 'src/app/core/models';
import { AccountService } from 'src/app/core/services/account.service';

@Component({
  selector: 'app-account-setup',
  templateUrl: './account-setup.component.html',
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
    public accountService: AccountService,
    private router: Router
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
        .createAccount(this.username, this.userSub)
        .subscribe((response) => {
          const { data, error } = response;
          if (data) {
            this.router.navigate(['/']);
          }
          if (error) {
            this.error = error;
          }
        });
    }
    this.isLoading = false;
  }

  get isLoadingValue() {
    return this.isLoading;
  }
}
