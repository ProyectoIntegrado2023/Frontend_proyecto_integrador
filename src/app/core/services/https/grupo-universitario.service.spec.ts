import { TestBed } from '@angular/core/testing';

import { GrupoUniversitarioService } from './grupo-universitario.service';

describe('GrupoUniversitarioService', () => {
  let service: GrupoUniversitarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrupoUniversitarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
