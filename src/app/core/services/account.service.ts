import { Injectable } from '@angular/core';
import { ExternalApiService } from './external-api.service';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(public externalApiService: ExternalApiService) {}

  createAccount(username: string) {}
}
