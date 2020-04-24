import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileWishlishtComponent } from './profile-wishlisht.component';

describe('ProfileWishlishtComponent', () => {
  let component: ProfileWishlishtComponent;
  let fixture: ComponentFixture<ProfileWishlishtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileWishlishtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileWishlishtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
