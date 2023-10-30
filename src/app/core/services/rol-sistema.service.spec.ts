import { TestBed } from '@angular/core/testing';

import { RolSistemaService } from './rol-sistema.service';

describe('RolSistemaService', () => {
  let service: RolSistemaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RolSistemaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
