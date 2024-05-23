import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {HeaderComponent} from './components/header/header.component';
import {HomeComponent} from './components/home/home.component';
import {CadastroComponent} from './components/cadastro/cadastro.component';
import {ExtratoComponent} from './components/extrato/extrato.component';
import {MatToolbar} from "@angular/material/toolbar";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {
  MatCell,
  MatCellDef,
  MatColumnDef, MatFooterCell, MatFooterCellDef, MatFooterRow, MatFooterRowDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import {HttpClientModule} from "@angular/common/http";
import {MatPaginator} from "@angular/material/paginator";
import {MatIcon} from "@angular/material/icon";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {AccountDetailDialogComponent} from './components/accountdetaildialog/account-detail-dialog.component';
import {CadastroClienteDialogComponent} from './components/cadastro-cliente-dialog/cadastro-cliente-dialog.component';
import {FormsModule} from "@angular/forms";
import {
  CadastroTransactionDialogComponent
} from './components/cadastro-transaction-dialog/cadastro-transaction-dialog.component';
import {MatFormField} from "@angular/material/form-field";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatInput} from "@angular/material/input";
import { ExtratoDialogComponent } from './components/extrato-dialog/extrato-dialog.component';
import {MatOption, MatSelect} from "@angular/material/select";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CadastroComponent,
    ExtratoComponent,
    AccountDetailDialogComponent,
    CadastroClienteDialogComponent,
    CadastroTransactionDialogComponent,
    ExtratoDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbar,
    MatButton,
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderCellDef,
    MatCellDef,
    MatCell,
    MatHeaderRow,
    MatRowDef,
    MatRow,
    MatHeaderRowDef,
    HttpClientModule,
    MatPaginator,
    MatIcon,
    MatIconButton,
    MatGridList,
    MatGridTile,
    MatCardHeader,
    FormsModule,
    MatFormField,
    MatCheckbox,
    MatInput,
    MatFooterCell,
    MatFooterCellDef,
    MatFooterRow,
    MatFooterRowDef,
    MatSelect,
    MatOption
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
