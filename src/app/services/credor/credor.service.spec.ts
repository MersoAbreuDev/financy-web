import { TestBed } from '@angular/core/testing';

import { CredorService } from './credor.service';

describe('CredorService', () => {
  let service: CredorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CredorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
