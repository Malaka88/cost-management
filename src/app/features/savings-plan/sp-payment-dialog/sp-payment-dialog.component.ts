import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as uuid from 'uuid';
import { SavingsPlan } from 'src/app/models/savings-plan-model';
import { DropDown } from 'src/app/models/drowpdown-model';

@Component({
  selector: 'app-sp-payment-dialog',
  templateUrl: './sp-payment-dialog.component.html',
  styleUrls: ['./sp-payment-dialog.component.css']
})
export class SpPaymentDialogComponent implements OnInit {

  public paymentForm: FormGroup;
  public turnus: DropDown[];
  public accounts: DropDown[];
  constructor(
    public dialogRef: MatDialogRef<SpPaymentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initForm();
    console.log(this.data.payment);
  }

  initForm() {

    if (this.data.btn == false) {
      //if dialog was opened with "add new"
      this.paymentForm = this.fb.group({
        name: [null, Validators.required],
        amount: [null, Validators.required],
        description: [null],
        myAccount: [null],
        transactionAccount: [null],
        startDate: [null],
        withdrawalDate: [null],
        periodNumber: [null, Validators.required],
        periodName: [null, Validators.required],
      })
    } else {
      //if dialog was opened with "edit"
      this.paymentForm = this.fb.group({

        name: [this.data.payment.name, Validators.required],
        amount: [this.data.payment.amount, Validators.required],
        description: [this.data.payment.description],
        myAccount: [this.data.payment.myAccount],
        transactionAccount: [this.data.payment.transactionAccount],
        startDate: [this.data.payment.startDate],
        withdrawalDate: [this.data.payment.withdrawalDate],
        periodNumber: [this.data.payment.periodNumber, Validators.required],
        periodName: [this.data.payment.periodName, Validators.required],
      })
    }

    //DropDown options for Turnus
    this.turnus = [
      { value: 'Woche', viewValue: 'Woche' },
      { value: 'Monat', viewValue: 'Monat' },
      { value: 'Jahr', viewValue: 'Jahr' },
    ];

    //Kontos options for Turnus
    this.accounts = [
      { value: 'DE58663500360010594379', viewValue: 'DE58663500360010594379' },
      { value: 'DE42660500360010524385', viewValue: 'DE42660500360010524385' },
    ];
  }

  closeDialog() {
    this.dialogRef.close(null);
  }

  submit() {
    if (this.paymentForm.valid) {
      //data.btn = false --> Dialog wurde über Vertrag hinzufügen geöffnet, Löschen-button isdisabled. Dialog action = new um neuen Vertrag hinzuzüfugen
      if (this.data.btn == false) {
        let payment = this.paymentForm.value as SavingsPlan;
        payment.uuidValue = uuid.v4();
        payment.dialogAction = 'new';
        this.dialogRef.close(payment);
      } else {
        
        this.data.payment.name = this.paymentForm.get('name')?.value;
        this.data.payment.amount = this.paymentForm.get('amount')?.value;
        this.data.payment.description = this.paymentForm.get('description')?.value;
        this.data.payment.startDate = this.paymentForm.get('startDate')?.value;
        this.data.payment.withdrawalDate = this.paymentForm.get('withdrawalDate')?.value;
        this.data.payment.myAccount = this.paymentForm.get('myAccount')?.value;
        this.data.payment.periodName = this.paymentForm.get('periodName')?.value;
        this.data.payment.periodNumber = this.paymentForm.get('periodNumber')?.value;
        this.data.payment.transactionAccount = this.paymentForm.get('transactionAccount')?.value;
        this.data.payment.dialogAction = 'update';
        this.dialogRef.close(this.data.payment);
      }
    }
  }
  delete() {
    if (this.paymentForm.valid) {
      this.data.payment.dialogAction = 'delete'
      this.dialogRef.close(this.data.payment);
    }
  }

}
