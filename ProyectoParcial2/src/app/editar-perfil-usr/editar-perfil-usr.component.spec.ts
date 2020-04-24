import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPerfilUsrComponent } from './editar-perfil-usr.component';

describe('EditarPerfilUsrComponent', () => {
  let component: EditarPerfilUsrComponent;
  let fixture: ComponentFixture<EditarPerfilUsrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarPerfilUsrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPerfilUsrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

function showSnackbar() {
  // Get the snackbar DIV
  var x = document.getElementById("snackbar");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}