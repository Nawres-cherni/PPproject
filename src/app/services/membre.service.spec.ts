import { TestBed } from '@angular/core/testing';

import { MembreService } from './membre.service';

describe('MembreService', () => {
  let service: MembreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MembreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
