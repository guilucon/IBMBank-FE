import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExtratoDialogComponent } from '../extrato-dialog/extrato-dialog.component';
import { AccountService } from '../../common/services/AccountService';
import { AccountListDTO } from '../../common/models/AccountListDTO';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {
  accounts: AccountListDTO[] = [];
  userOrConta: string = '';
  selectedAccountNumber: number | null = null;
  selectedAccount: AccountListDTO | null = null;

  constructor(public dialog: MatDialog, private accountService: AccountService) { }

  ngOnInit(): void {
    this.accountService.getAccounts().subscribe(accounts => {
      this.accounts = accounts;
    });
  }

  onAccountNumberChange(event: any): void {
    const accountNumber = event.value;
    this.selectedAccount = this.accounts.find(account => account.accountNumber === accountNumber) || null;
  }

  openExtratoDialog() {
    const accountNumber = this.selectedAccountNumber ? this.selectedAccountNumber : parseInt(this.userOrConta.replace(/[^0-9]/g, ''));

    if (!isNaN(accountNumber)) {
      const dialogRef = this.dialog.open(ExtratoDialogComponent, {
        width: '400px',
        data: { id: accountNumber, isNumeroConta: true }
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    } else {
      console.error('Valor inválido');
    }
  }
}
