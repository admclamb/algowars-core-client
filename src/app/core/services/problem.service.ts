import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, mergeMap, of } from 'rxjs';
import { environment as env } from '../../../environments/environment';
import { ApiResponseModel, RequestConfigModel } from '../models';
import { ProblemModel } from '../models/problem.model';
import { ExternalApiService } from './external-api.service';
import { PaginationConfig } from '../models/pagination-config.model';
import { ProblemsModel } from '../models/problems.model';

@Injectable({
  providedIn: 'root',
})
export class ProblemService {
  constructor(public externalApiService: ExternalApiService) {}

  getProblems({
    page,
    size,
    timestamp,
  }: PaginationConfig): Observable<ApiResponseModel<ProblemsModel | null>> {
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
  }

  getProblemById(
    problemId: number
  ): Observable<ApiResponseModel<ProblemModel | null>> {
    const config: RequestConfigModel = {
      url: `${env.api.serverUrl}/api/problem/find/${problemId}`,
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    };

    return this.externalApiService.callExternalApi(config).pipe(
      mergeMap((response) => {
        const { data, error } = response;

        return of({
          data: data ? (data as ProblemModel) : null,
          error,
        });
      })
    );
  }
}
