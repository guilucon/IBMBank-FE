import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CadastroClienteDialogComponent} from "../cadastro-cliente-dialog/cadastro-cliente-dialog.component";
import {CadastroTransactionDialogComponent} from "../cadastro-transaction-dialog/cadastro-transaction-dialog.component";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  constructor(public dialog: MatDialog) { }

  openClienteCadastroDialog(): void {
    const dialogRef = this.dialog.open(CadastroClienteDialogComponent, {
      width: '400px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openTransactionCadastroDialog() {
    const dialogRef = this.dialog.open(CadastroTransactionDialogComponent, {
      width: '400px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
