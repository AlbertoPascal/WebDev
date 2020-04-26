import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidacionBlockComponent } from './validacion-block.component';

describe('ValidacionBlockComponent', () => {
  let component: ValidacionBlockComponent;
  let fixture: ComponentFixture<ValidacionBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidacionBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidacionBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
