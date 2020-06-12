import { Component, OnInit } from '@angular/core';
import { AuthService} from 'src/app/services/auth.service';
import { Observable, of, throwError} from 'rxjs';
import {SessionData} from '../../../../main-components/models/session-data.model';
import { ProfileEditionService} from '../../services/profile-edition.service';
import {
  HttpClient,
  HttpHeaders,
  HttpResponse,
  HttpErrorResponse,
}from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profileadmin-add-member',
  templateUrl: './profileadmin-add-member.component.html',
  styleUrls: ['./profileadmin-add-member.component.scss']
})
export class ProfileadminAddMemberComponent implements OnInit {

  constructor(public ProfileInfo:ProfileEditionService) { }
  endpoint = 'http://localhost:8080/api/user';
  wishlist_endpoint = 'http://localhost:8080/api/Wishlist';
  transaction_endpoint = 'http://localhost:8080/api/Transaction';
  update_endpoint = 'http://localhost:8080/api/updateUser';
  

  MemberEmail  = new FormGroup({
    email: new FormControl(''),
  });
  Current_user = new SessionData();
  ngOnInit(): void {
  }
  ngOnLoad(){
    
  }
  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errorsi
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
  
  public addMember(){
    this.ProfileInfo.addMember(this.MemberEmail.get('email').value);
  }

}
