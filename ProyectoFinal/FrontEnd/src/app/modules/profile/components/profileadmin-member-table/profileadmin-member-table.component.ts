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
  });
  config: any;
  collection = 0
  constructor(public membersService: MemberTableServiceService) { 
    this.config = {
      id: "member_pag",
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.Members.length
    };
   }

  ngOnInit(): void {
    this.getMembers();
  }
  ngOnLoad():void{
    this.getMembers();
  }
  pageChanged(event){
    this.config.currentPage = event;
  }
  async getMembers(){
    let memberinfo = await this.membersService.getMembers();

    
   await memberinfo.subscribe((data)=>{
      console.log(data);
      this.Members= data;  

    });
    this.config = {
      id: "member_pag",
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.Members.length
    };
  }
  async SaveLimitChanges(update_id:String)
  {
    console.log("I need to erase " + update_id);
    let new_salary = this.salario.get('max').value;
    this.membersService.updateMember(update_id,new_salary);
    let promise = new Promise((resolve, reject) =>
    {
      setTimeout(() => {
        console.log("De regreso a save limit changes");
        this.salario.get('max').reset();
        this.ngOnInit();
      }, 500);
    });
    await promise;
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
