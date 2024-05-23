import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroTransactionDialogComponent } from './cadastro-transaction-dialog.component';

describe('CadastroTransactionDialogComponent', () => {
  let component: CadastroTransactionDialogComponent;
  let fixture: ComponentFixture<CadastroTransactionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroTransactionDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastroTransactionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
