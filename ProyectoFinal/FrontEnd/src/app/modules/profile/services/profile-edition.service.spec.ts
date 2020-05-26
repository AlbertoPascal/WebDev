import { TestBed } from '@angular/core/testing';

import { ProfileEditionService } from './profile-edition.service';

describe('ProfileEditionService', () => {
  let service: ProfileEditionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileEditionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
