import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AhorrosPresupuestoComponent } from './ahorros-presupuesto.component';

describe('AhorrosPresupuestoComponent', () => {
  let component: AhorrosPresupuestoComponent;
  let fixture: ComponentFixture<AhorrosPresupuestoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AhorrosPresupuestoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AhorrosPresupuestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
