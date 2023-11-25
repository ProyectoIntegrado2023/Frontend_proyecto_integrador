import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { vigilanteHomeGuard } from './vigilante-home.guard';

describe('vigilanteHomeGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => vigilanteHomeGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
