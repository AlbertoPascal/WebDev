import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AhorrosObjComponent } from './ahorros-obj.component';

describe('AhorrosObjComponent', () => {
  let component: AhorrosObjComponent;
  let fixture: ComponentFixture<AhorrosObjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AhorrosObjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AhorrosObjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
