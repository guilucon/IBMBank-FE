import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtratoDialogComponent } from './extrato-dialog.component';

describe('ExtratoDialogComponent', () => {
  let component: ExtratoDialogComponent;
  let fixture: ComponentFixture<ExtratoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExtratoDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExtratoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
