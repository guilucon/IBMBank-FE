import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDetailDialogComponent } from './account-detail-dialog.component';

describe('AccountdetaildialogComponent', () => {
  let component: AccountDetailDialogComponent;
  let fixture: ComponentFixture<AccountDetailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountDetailDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
