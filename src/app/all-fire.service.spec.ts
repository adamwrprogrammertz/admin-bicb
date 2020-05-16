import { TestBed } from '@angular/core/testing';

import { AllFireService } from './all-fire.service';

describe('AllFireService', () => {
  let service: AllFireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllFireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
