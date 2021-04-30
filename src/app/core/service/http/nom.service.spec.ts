import { TestBed } from '@angular/core/testing';

import { GentilService } from './gentil.service';

describe('GentilService', () => {
  let service: GentilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GentilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
