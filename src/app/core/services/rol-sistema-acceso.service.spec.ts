import { TestBed } from '@angular/core/testing';

import { RolSistemaAccesoService } from './rol-sistema-acceso.service';

describe('RolSistemaAccesoService', () => {
  let service: RolSistemaAccesoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RolSistemaAccesoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
