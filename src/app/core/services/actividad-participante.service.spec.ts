import { TestBed } from '@angular/core/testing';

import { ActividadParticipanteService } from './actividad-participante.service';

describe('ActividadParticipanteService', () => {
  let service: ActividadParticipanteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActividadParticipanteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
