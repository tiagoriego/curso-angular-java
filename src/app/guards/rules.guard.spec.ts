import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { rulesGuard } from './rules.guard';

describe('rulesGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => rulesGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
