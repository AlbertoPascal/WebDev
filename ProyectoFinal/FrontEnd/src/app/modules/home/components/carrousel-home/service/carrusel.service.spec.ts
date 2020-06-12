import { TestBed } from '@angular/core/testing';

import { CarruselService } from './carrusel.service';

describe('CarruselService', () => {
  let service: CarruselService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarruselService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
