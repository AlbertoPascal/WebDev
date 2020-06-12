import { Component, OnInit } from '@angular/core';
import { MemberTableData } from '../../models/member-table-data.model';
import { MemberTableServiceService } from '../../services/member-table-service.service';

@Component({
  selector: 'app-profileadmin-member-table',
  templateUrl: './profileadmin-member-table.component.html',
  styleUrls: ['./profileadmin-member-table.component.scss']
})
export class ProfileadminMemberTableComponent implements OnInit {
  
  Members: MemberTableData[] = [];

  constructor(public membersService: MemberTableServiceService) { }

  ngOnInit(): void {
    this.getMembers();
  }
  ngOnLoad():void{
    this.getMembers();
  }

  async getMembers(){
    let memberinfo = await this.membersService.getMembers();

    
    memberinfo.subscribe((data)=>{
      console.log(data);
      this.Members= data;  
    }) 
  }
}
