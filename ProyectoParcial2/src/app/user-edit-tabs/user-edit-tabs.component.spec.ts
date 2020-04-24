import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEditTabsComponent } from './user-edit-tabs.component';

describe('UserEditTabsComponent', () => {
  let component: UserEditTabsComponent;
  let fixture: ComponentFixture<UserEditTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserEditTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEditTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
