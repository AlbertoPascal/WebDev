import { TestBed } from '@angular/core/testing';

import { RecentactivityService } from './recentactivity.service';

describe('RecentactivityService', () => {
  let service: RecentactivityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecentactivityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
