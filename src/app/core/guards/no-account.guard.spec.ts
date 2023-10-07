import { TestBed } from '@angular/core/testing';

import { NoAccountGuard } from './no-account.guard';

describe('NoAccountGuard', () => {
  let guard: NoAccountGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NoAccountGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
