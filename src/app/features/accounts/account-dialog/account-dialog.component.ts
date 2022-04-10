import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as uuid from 'uuid';
import { Account } from 'src/app/models/account-models';

@Component({
  selector: 'app-account-dialog',
  templateUrl: './account-dialog.component.html',
  styleUrls: ['./account-dialog.component.css']
})
export class AccountDialogComponent implements OnInit {

  public accountForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AccountDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {

    if (this.data.btn == false) {
      //if dialog was opened with "add new"
      this.accountForm = this.fb.group({
        name: [null, Validators.required],
        amount: [null,Validators.required],
        bic: [null],
        iban: [null],
        // imgPath: [null],
        // route: [null],
      })
    } else {
      //if dialog was opened with "edit"
      this.accountForm = this.fb.group({
        name: [this.data.account.name, Validators.required],
        amount: [this.data.account.amount,Validators.required],
        bic: [this.data.account.bic],
        iban: [this.data.account.iban],
        imgPath: [this.data.account.imgPath],
        route: [this.data.account.route],
      })
    }
  }

  closeDialog() {
    this.dialogRef.close(null);
  }

  submit() {
    if (this.accountForm.valid) {
      //data.btn = false --> Dialog wurde über Vertrag hinzufügen geöffnet, Löschen-button isdisabled. Dialog action = new um neuen Vertrag hinzuzüfugen
      if (this.data.btn == false) {
        let account = this.accountForm.value as Account;
        account.uuidValue = uuid.v4();
        account.dialogAction = 'new';
        this.dialogRef.close(account);
      } else {

        this.data.account.name = this.accountForm.get('name')?.value;
        this.data.account.amount = this.accountForm.get('amount')?.value;
        this.data.account.bic = this.accountForm.get('bic')?.value;
        this.data.account.iban = this.accountForm.get('iban')?.value;
        this.data.account.dialogAction = 'update';
        this.dialogRef.close(this.data.account);
      }
    }
  }
  delete() {
    if (this.accountForm.valid) {
      this.data.account.dialogAction = 'delete'
      this.dialogRef.close(this.data.account);
    }
  }

}



