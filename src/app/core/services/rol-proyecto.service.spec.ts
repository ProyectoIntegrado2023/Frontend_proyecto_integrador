import { TestBed } from '@angular/core/testing';

import { RolProyectoService } from './rol-proyecto.service';

describe('RolProyectoService', () => {
  let service: RolProyectoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RolProyectoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
