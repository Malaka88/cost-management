import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as uuid from 'uuid';
import { CreditCard } from 'src/app/models/creditcard-model';


@Component({
  selector: 'app-creditcard-dialog',
  templateUrl: './creditcard-dialog.component.html',
  styleUrls: ['./creditcard-dialog.component.css']
})
export class CreditcardDialogComponent implements OnInit {

  public creditCardForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CreditcardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {

    if (this.data.btn == false) {
      //if dialog was opened with "add new"
      this.creditCardForm = this.fb.group({
        name: [null, Validators.required],
        amount: [null,Validators.required],
        expirationDay: [null],
        creditCardNumber: [null],
      })
    } else {
      //if dialog was opened with "edit"
      this.creditCardForm = this.fb.group({
        name: [this.data.creditCard.name, Validators.required],
        amount: [this.data.creditCard.amount,Validators.required],
        expirationDay: [this.data.creditCard.expirationDay],
        creditCardNumber: [this.data.creditCard.creditCardNumber],
        imgPath: [this.data.creditCard.imgPath],
        route: [this.data.creditCard.route],
      })
    }
  }

  closeDialog() {
    this.dialogRef.close(null);
  }

  submit() {
    if (this.creditCardForm.valid) {
      //data.btn = false --> Dialog wurde über Vertrag hinzufügen geöffnet, Löschen-button isdisabled. Dialog action = new um neuen Vertrag hinzuzüfugen
      if (this.data.btn == false) {
        let creditCard = this.creditCardForm.value as CreditCard;
        creditCard.uuidValue = uuid.v4();
        creditCard.dialogAction = 'new';
        this.dialogRef.close(creditCard);
      } else {

        this.data.creditCard.name = this.creditCardForm.get('name')?.value;
        this.data.creditCard.amount = this.creditCardForm.get('amount')?.value;
        this.data.creditCard.expirationDay = this.creditCardForm.get('expirationDay')?.value;
        this.data.creditCard.creditCardNumber = this.creditCardForm.get('creditCardNumber')?.value;
        this.data.creditCard.dialogAction = 'update';
        this.dialogRef.close(this.data.creditCard);
      }
    }
  }
  delete() {
    if (this.creditCardForm.valid) {
      this.data.creditCard.dialogAction = 'delete'
      this.dialogRef.close(this.data.creditCard);
    }
  }

}



