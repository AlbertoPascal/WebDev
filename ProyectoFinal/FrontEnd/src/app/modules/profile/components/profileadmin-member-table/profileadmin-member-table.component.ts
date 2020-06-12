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
    let fam_arr;
    let promesa = new Promise((resolve,reject)=>
    {
      
      memberinfo.subscribe((data)=>{
        console.log("component family data: ");
        console.log(data);
        
        fam_arr = data;
        resolve(fam_arr);
      });
    });
    let resp = await promesa;
    console.log("resp value is ");
    console.log(fam_arr);

    await fam_arr.array.forEach(element => {
      console.log("My user found was ");
      console.log(element);
    });

    console.log("Out of suscribe");
    console.log(this.Members);
    
   /* this.membersService.getMembers().subscribe((data)=>{
      console.log(data);
      this.Members= data;  
  }) */
}
}
