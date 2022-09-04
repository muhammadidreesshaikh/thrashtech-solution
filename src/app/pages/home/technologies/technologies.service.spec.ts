import { TestBed } from '@angular/core/testing';

import { TechnologiesService } from './technologies.service';

describe('TechnologiesService', () => {
  let service: TechnologiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechnologiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
