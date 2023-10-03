import { Injectable } from '@angular/core';
import { ExternalApiService } from './external-api.service';
import { Observable, mergeMap, of } from 'rxjs';
import { environment as env } from '../../../environments/environment';
import { ApiResponseModel, RequestConfigModel } from '../models';
import { AccountModel } from 'src/app/features/account/models/account.model';
import { ProblemModel } from 'src/app/features/problem/models/problem.model';

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
        authorization: `Bearer ${accessToken}`,
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
