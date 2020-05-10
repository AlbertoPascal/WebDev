import { TestBed } from '@angular/core/testing';

import { MemberTableServiceService } from './member-table-service.service';

describe('MemberTableServiceService', () => {
  let service: MemberTableServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemberTableServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
