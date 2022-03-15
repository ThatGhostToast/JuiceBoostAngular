import { TestBed } from '@angular/core/testing';

import { JuiceServiceService } from './juice-service.service';

describe('JuiceServiceService', () => {
  let service: JuiceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JuiceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
