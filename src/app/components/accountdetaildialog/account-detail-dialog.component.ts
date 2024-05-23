import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AccountService} from "../../common/services/AccountService";
import {AccountDetailsDTO} from "../../common/models/AccountDetailsDTO";

@Component({
  selector: 'app-accountdetaildialog',
  templateUrl: './account-detail-dialog.component.html',
  styleUrl: './account-detail-dialog.component.css'
})
export class AccountDetailDialogComponent implements OnInit{

  accountDetails: AccountDetailsDTO = new AccountDetailsDTO();

  constructor(
    public dialogRef: MatDialogRef<AccountDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
    this.accountService.getAccountDetails(this.data.accountNumber).subscribe(details => {
      this.accountDetails = details;
    });
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
