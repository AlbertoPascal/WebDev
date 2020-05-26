import { Component, OnInit } from '@angular/core';
import { UserNameService} from '../../services/user-name.service';
@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.scss']
})
export class PerfilUsuarioComponent implements OnInit {

  showName = new UserNameService();
  constructor() { }

  ngOnInit(): void {
    this.showName.fetchData();
    
  }

}
