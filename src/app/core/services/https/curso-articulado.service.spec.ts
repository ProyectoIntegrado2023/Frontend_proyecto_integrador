import { TestBed } from '@angular/core/testing';

import { CursoArticuladoService } from './curso-articulado.service';

describe('CursoArticuladoService', () => {
  let service: CursoArticuladoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursoArticuladoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
