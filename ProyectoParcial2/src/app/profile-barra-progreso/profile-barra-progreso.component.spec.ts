import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileBarraProgresoComponent } from './profile-barra-progreso.component';

describe('ProfileBarraProgresoComponent', () => {
  let component: ProfileBarraProgresoComponent;
  let fixture: ComponentFixture<ProfileBarraProgresoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileBarraProgresoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileBarraProgresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
