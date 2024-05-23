import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AccountService} from "../../common/services/AccountService";
import {AccountDTO} from "../../common/models/AccountDTO";
import {TransactionDTO} from "../../common/models/TransactionDTO";

@Component({
  selector: 'app-extrato-dialog',
  templateUrl: './extrato-dialog.component.html',
  styleUrl: './extrato-dialog.component.css'
})
export class ExtratoDialogComponent implements OnInit{
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private accountService: AccountService
  ) { }

  account: AccountDTO | undefined;
  displayedColumns: string[] = ['transactionDate', 'transactionType', 'amount'];
  displayedFooterColumns: string[] = ['transactionDate', 'transactionType', 'amount'];


  ngOnInit(): void {
    if(this.data.isNumeroConta) {
      this.accountService.getAccountByAccountNumber(this.data.id).subscribe(data => {
        console.log(data)
        this.account = this.transformAccountData(data);
      })
    }
  }

  transformAccountData(account: AccountDTO): AccountDTO {
    if (account.transactions) {
      account.transactions = account.transactions.map(transaction => {
        if (typeof transaction.transactionDate === 'string') {
          transaction.transactionDate = new Date(transaction.transactionDate);
        }
        return transaction;
      });
    }
    return account;
  }

  get transactions(): TransactionDTO[] {
    return this.account?.transactions || [];
  }
}
