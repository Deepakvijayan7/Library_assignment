import { TestBed } from '@angular/core/testing';

import { Bookservice } from './newbook.service';

describe('Bookservice', () => {
  let service: Bookservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Bookservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
