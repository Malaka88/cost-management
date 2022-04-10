import { Component, Inject, OnInit } from '@angular/core';
import { CreditcardDialogComponent } from '../creditcard-dialog/creditcard-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreditCard } from 'src/app/models/creditcard-model';

@Component({
  selector: 'app-new-creditcard-dialog',
  templateUrl: './new-creditcard-dialog.component.html',
  styleUrls: ['./new-creditcard-dialog.component.css']
})
export class NewCreditcardDialogComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<CreditcardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close(null);
  }

  openEditCardDialog(creditCard: CreditCard, delBtnIsVisible: Boolean) {
    const dialogRef = this.dialog.open(CreditcardDialogComponent, {
      data: { creditCard: creditCard, btn: delBtnIsVisible },
    });
    dialogRef.afterClosed().subscribe(x => this.dialogRef.close(x));
  }

}