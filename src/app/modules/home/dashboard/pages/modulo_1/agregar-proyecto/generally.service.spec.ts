import { TestBed } from '@angular/core/testing';

import { GenerallyService } from './generally.service';

describe('GenerallyService', () => {
  let service: GenerallyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerallyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
