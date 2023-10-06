import { Injectable } from '@angular/core';
import { Observable, mergeMap, of } from 'rxjs';
import { ApiResponseModel, RequestConfigModel } from '../models';
import { environment as env } from '../../../environments/environment';
import { AccountModel } from '../models/account.model';
import { ExternalApiService } from './external-api.service';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(public externalApiService: ExternalApiService) {}

  createAccount(
    username: string,
    user_id: string,
    accessToken: string
  ): Observable<ApiResponseModel<AccountModel | null>> {
    const body = {
      username,
      user_id,
    };

    const config: RequestConfigModel = {
      url: `${env.api.serverUrl}/api/account/create`,
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body,
    };

    return this.externalApiService.callExternalApi(config).pipe(
      mergeMap((response) => {
        const { data, error } = response;

        return of({
          data: data ? (data as AccountModel) : null,
          error,
        });
      })
    );
  }
}
