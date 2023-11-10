import { TestBed } from '@angular/core/testing';

import { RolNegocioService } from './rol-negocio.service';

describe('RolNegocioService', () => {
  let service: RolNegocioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RolNegocioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
