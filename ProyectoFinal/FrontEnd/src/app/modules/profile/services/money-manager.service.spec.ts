import { TestBed } from '@angular/core/testing';

import { MoneyManagerService } from './money-manager.service';

describe('MoneyManagerService', () => {
  let service: MoneyManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoneyManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
