import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AhorrosSavingsComponent } from './ahorros-savings.component';

describe('AhorrosSavingsComponent', () => {
  let component: AhorrosSavingsComponent;
  let fixture: ComponentFixture<AhorrosSavingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AhorrosSavingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AhorrosSavingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
