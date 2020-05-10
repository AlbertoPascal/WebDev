import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { MemberTableData } from '../models/member-table-data.model';

@Injectable({
  providedIn: 'root'
})
export class MemberTableServiceService {

  constructor() { }

  getMembers():Observable<MemberTableData[]>{
    let members:MemberTableData[] = [
      new MemberTableData("Moises Torres", "../../assets/images/moi.jpeg", "Estudiante", "27/03/2020", 5000, 1000, 5),
      new MemberTableData("Alberto Pascal", "../../assets/images/alberto.jpeg", "Estudiante", "26/03/2020", 3300, 1250, 3),
      new MemberTableData("John Doe", "../../assets/images/blank-profile-picture.png", "Estudiante", "01/03/2020", 100, 300, 1),
      new MemberTableData("Jhonny Rocket", "../../assets/images/blank-profile-picture.png", "Estudiante", "27/03/2020", 100, 300, 1),
      new MemberTableData("Achilles Florales", "../../assets/images/blank-profile-picture.png", "Estudiante", "27/03/2020", 100, 300, 1),
      new MemberTableData("Josh Nickels", "../../assets/images/blank-profile-picture.png", "Estudiante", "27/03/2020", 100, 300, 1),
      new MemberTableData("Juan Rodriguez", "../../assets/images/blank-profile-picture.png", "Estudiante", "27/03/2020", 100, 300, 1),
      new MemberTableData("Mariano Narro", "../../assets/images/blank-profile-picture.png", "Estudiante", "27/03/2020", 100, 300, 1),
      new MemberTableData("Joaquin Perez", "../../assets/images/blank-profile-picture.png", "Estudiante", "27/03/2020", 100, 300, 1),
      new MemberTableData("Emiliano Zapata", "../../assets/images/blank-profile-picture.png", "Estudiante", "27/03/2020", 100, 300, 1),
      new MemberTableData("X AE A-12", "../../assets/images/x_ae_a_12.jpg", "Estudiante", "04/05/2020", 999999, 999999999, 0),
      new MemberTableData("John Doe", "../../assets/images/blank-profile-picture.png", "Estudiante", "01/03/2020", 100, 300, 1),
      new MemberTableData("John Doe", "../../assets/images/blank-profile-picture.png", "Estudiante", "01/03/2020", 100, 300, 1),
      new MemberTableData("John Doe", "../../assets/images/blank-profile-picture.png", "Estudiante", "01/03/2020", 100, 300, 1),
      new MemberTableData("John Doe", "../../assets/images/blank-profile-picture.png", "Estudiante", "01/03/2020", 100, 300, 1),
      new MemberTableData("John Doe", "../../assets/images/blank-profile-picture.png", "Estudiante", "01/03/2020", 100, 300, 1),
      new MemberTableData("John Doe", "../../assets/images/blank-profile-picture.png", "Estudiante", "01/03/2020", 100, 300, 1),
      new MemberTableData("John Doe", "../../assets/images/blank-profile-picture.png", "Estudiante", "01/03/2020", 100, 300, 1),
      new MemberTableData("John Doe", "../../assets/images/blank-profile-picture.png", "Estudiante", "01/03/2020", 100, 300, 1),
    ];

    return of(members);
  }
}
