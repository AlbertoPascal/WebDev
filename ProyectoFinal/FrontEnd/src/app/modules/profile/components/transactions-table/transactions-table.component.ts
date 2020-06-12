import { Component, OnInit } from '@angular/core';
import { MemberTableServiceService } from '../../services/member-table-service.service';
import { TransactionInfo } from '../../models/transaction-info.model';

@Component({
  selector: 'app-transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.scss']
})
export class TransactionsTableComponent implements OnInit {

  constructor(public MemberInfo:MemberTableServiceService) { }
  transInfo : TransactionInfo[] = [];

  ngOnInit(): void {
    this.getTransactions(); 
  }
  public async getTransactions(){
    //let transInfo:TransactionInfo[] = [];
    (await this.MemberInfo.getTransInfo()).subscribe(data=>
      {
        console.log("de regreso en el componente de transactoins valgo");
        console.log(data);
        this.transInfo = data;
      });
  }

}
