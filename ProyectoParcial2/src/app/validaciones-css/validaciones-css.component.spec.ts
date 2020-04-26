import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidacionesCssComponent } from './validaciones-css.component';

describe('ValidacionesCssComponent', () => {
  let component: ValidacionesCssComponent;
  let fixture: ComponentFixture<ValidacionesCssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidacionesCssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidacionesCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
