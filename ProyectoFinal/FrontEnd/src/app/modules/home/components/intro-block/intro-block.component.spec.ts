import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroBlockComponent } from './intro-block.component';

describe('IntroBlockComponent', () => {
  let component: IntroBlockComponent;
  let fixture: ComponentFixture<IntroBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
