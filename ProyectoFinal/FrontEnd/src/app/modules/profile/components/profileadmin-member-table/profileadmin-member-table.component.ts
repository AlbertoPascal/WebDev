import { Component, OnInit } from '@angular/core';
import { MemberTableData } from '../../models/member-table-data.model';
import { MemberTableServiceService } from '../../services/member-table-service.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profileadmin-member-table',
  templateUrl: './profileadmin-member-table.component.html',
  styleUrls: ['./profileadmin-member-table.component.scss']
})
export class ProfileadminMemberTableComponent implements OnInit {
  
  Members: MemberTableData[] = [];
  salario = new FormGroup({
    max: new FormControl('')
  })
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

  async RemoveMember(erase_id:String)
  {
    console.log("I need to erase " + erase_id);
    this.membersService.EraseMember(erase_id);
    let promise = new Promise((resolve, reject) =>
    {
      setTimeout(() => {
        console.log("bienvenido");
        this.ngOnInit();
      }, 500);
    });
    await promise;
  }
}
