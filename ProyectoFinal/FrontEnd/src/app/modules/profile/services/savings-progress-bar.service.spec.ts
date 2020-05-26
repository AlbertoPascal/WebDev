import { TestBed } from '@angular/core/testing';

import { SavingsProgressBarService } from './savings-progress-bar.service';

describe('SavingsProgressBarService', () => {
  let service: SavingsProgressBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavingsProgressBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
