import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as uuid from 'uuid';
import { BookingModel } from 'src/app/models/booking-model';
import { DropDown } from 'src/app/models/drowpdown-model';


@Component({
  selector: 'app-transaction-dialog',
  templateUrl: './transaction-dialog.component.html',
  styleUrls: ['./transaction-dialog.component.css']
})
export class TransactionDialogComponent implements OnInit {

  public transactionForm: FormGroup;
  public turnus: DropDown[];
  public categories: DropDown[];
  public isTaxRelevevantWhenCreated: Boolean;
  public isTaxRelevevantWhenEdited: Boolean;
  constructor(
    public dialogRef: MatDialogRef<TransactionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {

    if (this.data.btn == false) {
      //if dialog was opened with "add new"
      this.transactionForm = this.fb.group({
        name: [null, Validators.required],
        amount: [null, Validators.required],
        date:  [null,Validators.required],
        periodNumber: [null],
        periodName: [null],
        isTaxRelevant: [false],
        category: [null],
        transactionAccount: [null],
      })
    } else {
      //if dialog was opened with "edit"
      this.transactionForm = this.fb.group({
        name: [this.data.bookingData.name, Validators.required],
        amount: [this.data.bookingData.amount, Validators.required],
        date:  [this.data.bookingData.date,Validators.required],
        uuidValue: [this.data.bookingData.uuidValue],
        periodNumber: [this.data.bookingData.periodNumber],
        periodName: [this.data.bookingData.periodName],
        isTaxRelevant: [this.data.bookingData.isTaxRelevant],
        category: [this.data.bookingData.category],
        transactionAccount: [this.data.bookingData.transactionAccount],
      })
      this.isTaxRelevevantWhenEdited = this.data.bookingData.isTaxRelevant;
    }

    //DropDown options for Turnus
    this.turnus = [
      { value: 'einmalig', viewValue: 'einmalig' },
      { value: 'Woche', viewValue: 'Woche' },
      { value: 'Monat', viewValue: 'Monat' },
      { value: 'Jahr', viewValue: 'Jahr' },
    ];

    //DropDown options for category
    this.categories = [
      { value: 'Miete', viewValue: 'Miete' },
      { value: 'Gehalt', viewValue: 'Gehalt' },
      { value: 'Einkauf', viewValue: 'Einkauf' },
      { value: 'Sport & Fitness', viewValue: 'Sport & Fitness' },
      { value: 'Spende', viewValue: 'Spende' },
      { value: 'Kleidung', viewValue: 'Kleidung' },
      { value: 'Essen & Trinken', viewValue: 'Essen & Trinken' },
      { value: 'Gebühr', viewValue: 'Gebühr' },
      { value: 'Versicherung', viewValue: 'Versicherung' },
      { value: 'Abonnement', viewValue: 'Abonnement' },
      { value: 'Wertpapier', viewValue: 'Wertpapier' },
      { value: 'Steuer', viewValue: 'Steuer' },
      { value: 'Sonstiges', viewValue: 'Sonstiges' },
      { value: 'Kategorie Hinzufügen', viewValue: 'Kategorie Hinzufügen' },
    ];
  }

  closeDialog() {
    this.data.bookingData.isTaxRelevant = this.isTaxRelevevantWhenEdited;
    this.dialogRef.close(null);
  }

  submit() {
    if (this.transactionForm.valid) {
      //data.btn = false --> Dialog wurde über Vertrag hinzufügen geöffnet, Löschen-button isdisabled. Dialog action = new um neuen Vertrag hinzuzüfugen
      if (this.data.btn == false) {
        let transaction = this.transactionForm.value as BookingModel;
        transaction.uuidValue = uuid.v4();
        transaction.dialogAction = 'new';
        transaction.isTaxRelevant = this.isTaxRelevevantWhenCreated;
        this.dialogRef.close(transaction);
      } else {
        this.data.bookingData.name = this.transactionForm.get('name')?.value;
        this.data.bookingData.amount = this.transactionForm.get('amount')?.value;
        this.data.bookingData.transactionAccount = this.transactionForm.get('transactionAccount')?.value;
        this.data.bookingData.date = this.transactionForm.get('date')?.value;
        this.data.bookingData.category = this.transactionForm.get('category')?.value;
        this.data.bookingData.periodName = this.transactionForm.get('periodName')?.value;
        this.data.bookingData.periodNumber = this.transactionForm.get('periodNumber')?.value;
        this.data.bookingData.dialogAction = 'update';
        this.dialogRef.close(this.data.bookingData);
      }
    }
  }
  delete() {
    if (this.transactionForm.valid) {
      this.data.bookingData.dialogAction = 'delete'
      this.dialogRef.close(this.data.bookingData);
    }
  }

  onChangeCheckBox(event: any) {
    if (event.checked && this.data.btn) {
      this.data.bookingData.isTaxRelevant = true;
    } else if (!event.checked && this.data.btn) {
      this.data.bookingData.isTaxRelevant = false;
    } else if (event.checked && !this.data.btn) {
      this.isTaxRelevevantWhenCreated = true;
    } else if (!event.checked && !this.data.btn) {
      this.isTaxRelevevantWhenCreated = false;
    }
  }

}


