import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AhorrosDoughnutchartComponent } from './ahorros-doughnutchart.component';

describe('AhorrosDoughnutchartComponent', () => {
  let component: AhorrosDoughnutchartComponent;
  let fixture: ComponentFixture<AhorrosDoughnutchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AhorrosDoughnutchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AhorrosDoughnutchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
