import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileRecentActivityComponent } from './profile-recent-activity.component';

describe('ProfileRecentActivityComponent', () => {
  let component: ProfileRecentActivityComponent;
  let fixture: ComponentFixture<ProfileRecentActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileRecentActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileRecentActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
