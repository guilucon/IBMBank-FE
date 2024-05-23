import {Component, OnInit} from '@angular/core';
import {AccountListDTO} from "../../common/models/AccountListDTO";
import {AccountService} from "../../common/services/AccountService";
import {MatDialog} from "@angular/material/dialog";
import {AccountDetailDialogComponent} from "../accountdetaildialog/account-detail-dialog.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  accounts: AccountListDTO[] = [];
  displayedColumns: string[] = ['accountNumber', 'clientName', 'balance', 'detail'];

  constructor(private accountService: AccountService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.accountService.getAccounts().subscribe(accounts => {
      this.accounts = accounts;
    });
  }

  openDetailDialog(accountNumber: number): void {
    const dialogRef = this.dialog.open(AccountDetailDialogComponent, {
      width: '400px',
      data: { accountNumber }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  refreshData() {
    this.accountService.getAccounts()
      .subscribe(accounts => this.accounts = accounts);
  }
}
