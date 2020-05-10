import { Component, OnInit } from '@angular/core';
import { UserNameService} from '../../services/user-name.service';
@Component({
  selector: 'app-profile-pic',
  templateUrl: './profile-pic.component.html',
  styleUrls: ['./profile-pic.component.scss']
})
export class ProfilePicComponent implements OnInit {

  constructor() { }
  showPic = new UserNameService();
  ngOnInit(): void {
    this.showPic.fetchData();
  }

}
