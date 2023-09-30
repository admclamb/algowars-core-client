import { Injectable } from '@angular/core';
import { ExternalApiService } from './external-api.service';
import { Observable, mergeMap, of } from 'rxjs';
import { environment as env } from '../../../environments/environment';
import { ApiResponseModel, AppErrorModel, RequestConfigModel } from '../models';
import { PaginationConfig } from '../models/pagination-config.model';
import { CreateProblemModel } from 'src/app/features/problem/models/create-problem.model';
import { ProblemsModel } from 'src/app/features/problems/models/problems.model';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProblemService {
  constructor(public externalApiService: ExternalApiService) {}

  getProblems = ({
    page,
    size,
    timestamp,
  }: PaginationConfig): Observable<ApiResponseModel<ProblemsModel | null>> => {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size)
      .set('timestamp', timestamp.toISOString());
    const config: RequestConfigModel = {
      url: `${env.api.serverUrl}/api/problem`,
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
      params,
    };

    return this.externalApiService.callExternalApi(config).pipe(
      mergeMap((response) => {
        const { data, error } = response;

        return of({
          data: data ? (data as ProblemsModel) : null,
          error,
        });
      })
    );
  };
}
