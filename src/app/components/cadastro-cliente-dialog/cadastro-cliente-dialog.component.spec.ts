import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroClienteDialogComponent } from './cadastro-cliente-dialog.component';

describe('CadastroClienteDialogComponent', () => {
  let component: CadastroClienteDialogComponent;
  let fixture: ComponentFixture<CadastroClienteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroClienteDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastroClienteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
