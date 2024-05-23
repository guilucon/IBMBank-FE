import { Component } from '@angular/core';
import {ClientDTO} from "../../common/models/ClientDTO";
import {ClientService} from "../../common/services/ClientService";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-cadastro-cliente-dialog',
  templateUrl: './cadastro-cliente-dialog.component.html',
  styleUrl: './cadastro-cliente-dialog.component.css'
})
export class CadastroClienteDialogComponent {
  cliente: ClientDTO = new ClientDTO();

  constructor(public dialogRef: MatDialogRef<CadastroClienteDialogComponent>, private clientService: ClientService) { }

  onSubmit(): void {
    this.clientService.createClient(this.cliente).subscribe(
      response => {
        console.log('Cliente cadastrado com sucesso:', response);
        this.dialogRef.close();
      },
      error => {
        console.error('Erro ao cadastrar cliente:', error);
      }
    );
  }
}
