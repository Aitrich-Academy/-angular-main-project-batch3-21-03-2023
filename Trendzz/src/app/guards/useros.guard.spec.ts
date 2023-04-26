import { TestBed } from '@angular/core/testing';

import { UserosGuard } from './useros.guard';

describe('UserosGuard', () => {
  let guard: UserosGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserosGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
