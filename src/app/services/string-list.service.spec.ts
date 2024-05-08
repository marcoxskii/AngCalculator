import { TestBed } from '@angular/core/testing';

import { StringListService } from './string-list.service';

describe('StringListService', () => {
  let service: StringListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StringListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
