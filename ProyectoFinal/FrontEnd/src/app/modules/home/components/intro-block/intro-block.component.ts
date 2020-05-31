import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-intro-block',
  templateUrl: './intro-block.component.html',
  styleUrls: ['./intro-block.component.scss']
})
export class IntroBlockComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }


}
