import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileadminMemberTableComponent } from './profileadmin-member-table.component';

describe('ProfileadminMemberTableComponent', () => {
  let component: ProfileadminMemberTableComponent;
  let fixture: ComponentFixture<ProfileadminMemberTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileadminMemberTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileadminMemberTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
