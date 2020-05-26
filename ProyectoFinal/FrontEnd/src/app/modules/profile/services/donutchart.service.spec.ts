import { TestBed } from '@angular/core/testing';

import { DonutchartService } from './donutchart.service';

describe('DonutchartService', () => {
  let service: DonutchartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonutchartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
