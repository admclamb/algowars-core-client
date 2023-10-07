import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Observable, map, switchMap } from 'rxjs';
import { AccountService } from '../services/account.service';

@Injectable({
  providedIn: 'root',
})
export class NoAccountGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private accountService: AccountService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.auth.user$.pipe(
      switchMap((user) => {
        return this.accountService.findAccount(user?.sub ?? '').pipe(
          map((response) => {
            if (!response.data) {
              return true;
            }
            return false;
          })
        );
      })
    );
  }
}
