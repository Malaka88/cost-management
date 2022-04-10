import { Component, Inject, OnInit } from '@angular/core';
import { AccountDialogComponent } from '../account-dialog/account-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Account } from 'src/app/models/account-models';

@Component({
  selector: 'app-new-account-dialog',
  templateUrl: './new-account-dialog.component.html',
  styleUrls: ['./new-account-dialog.component.css']
})
export class NewAccountDialogComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<AccountDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close(null);
  }

  openEditAccountDialog(account: Account, delBtnIsVisible: Boolean) {
    const dialogRef = this.dialog.open(AccountDialogComponent, {
      data: { account: account, btn: delBtnIsVisible },
    });
    dialogRef.afterClosed().subscribe(x => this.dialogRef.close(x));
  }

}
