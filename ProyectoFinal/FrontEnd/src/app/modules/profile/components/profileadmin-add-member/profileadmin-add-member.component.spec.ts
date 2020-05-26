import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileadminAddMemberComponent } from './profileadmin-add-member.component';

describe('ProfileadminAddMemberComponent', () => {
  let component: ProfileadminAddMemberComponent;
  let fixture: ComponentFixture<ProfileadminAddMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileadminAddMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileadminAddMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
