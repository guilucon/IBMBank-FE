import { Component, OnInit } from '@angular/core';
import { TransactionDTO } from '../../common/models/TransactionDTO';
import { AccountService } from '../../common/services/AccountService';
import { MatDialogRef } from '@angular/material/dialog';
import { AccountListDTO } from '../../common/models/AccountListDTO';
import { TransactionService } from '../../common/services/TransactionService';

@Component({
  selector: 'app-cadastro-transaction-dialog',
  templateUrl: './cadastro-transaction-dialog.component.html',
  styleUrls: ['./cadastro-transaction-dialog.component.css']
})
export class CadastroTransactionDialogComponent implements OnInit {
  transacao: TransactionDTO = new TransactionDTO();
  accounts: AccountListDTO[] = [];
  selectedAccount: AccountListDTO | null = null;

  constructor(
    private accountService: AccountService,
    private transactionService: TransactionService,
    public dialogRef: MatDialogRef<CadastroTransactionDialogComponent>
  ) { }

  ngOnInit(): void {
    this.accountService.getAccounts().subscribe(accounts => {
      this.accounts = accounts;
    });
  }

  onAccountNumberChange(event: any): void {
    const accountNumber = event.value;
    this.selectedAccount = this.accounts.find(account => account.accountNumber === accountNumber) || null;
  }

  onSubmit(): void {
    this.transactionService.createTransaction(this.transacao).subscribe(
      response => {
        console.log('Transação cadastrada com sucesso:', response);
        this.dialogRef.close();
      },
      error => {
        console.error('Erro ao cadastrar transação:', error);
      }
    );
  }
}
