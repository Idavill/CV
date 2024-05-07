import { TestBed } from '@angular/core/testing';

import { TextSectionServiceService } from './text-section-service.service';

describe('TextSectionServiceService', () => {
  let service: TextSectionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextSectionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
