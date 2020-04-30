import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileProgressbarComponent } from './profile-progressbar.component';

describe('ProfileProgressbarComponent', () => {
  let component: ProfileProgressbarComponent;
  let fixture: ComponentFixture<ProfileProgressbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileProgressbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileProgressbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
