import { TestBed } from '@angular/core/testing';

import { RolProyectoEncargadoService } from './rol-proyecto-encargado.service';

describe('RolProyectoEncargadoService', () => {
  let service: RolProyectoEncargadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RolProyectoEncargadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
