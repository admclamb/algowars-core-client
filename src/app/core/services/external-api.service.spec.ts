import { TestBed } from '@angular/core/testing';

import { ExternalApiService } from './external-api.service';

describe('ExternalApiService', () => {
  let service: ExternalApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExternalApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
