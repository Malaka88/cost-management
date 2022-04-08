import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as uuid from 'uuid';
import { SavingsPlan } from 'src/app/models/savings-plan-model';
import { DropDown } from 'src/app/models/drowpdown-model';

@Component({
  selector: 'app-sp-assets-dialog',
  templateUrl: './sp-assets-dialog.component.html',
  styleUrls: ['./sp-assets-dialog.component.css']
})
export class SpAssetsDialogComponent implements OnInit {

  public assetForm: FormGroup;
  public turnus: DropDown[];
  public accounts: DropDown[];
  public stocks: DropDown[];
  constructor(
    public dialogRef: MatDialogRef<SpAssetsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initForm();
    console.log(this.data.asset);
  }

  initForm() {

    if (this.data.btn == false) {
      //if dialog was opened with "add new"
      this.assetForm = this.fb.group({
        name: [null, Validators.required],
        amount: [null, Validators.required],
        description: [null],
        myAccount: [null],
        startDate: [null],
        withdrawalDate: [null],
        fee: [null],
        stock: [null],
        periodNumber: [null, Validators.required],
        periodName: [null, Validators.required],
      })
    } else {
      //if dialog was opened with "edit"
      this.assetForm = this.fb.group({

        name: [this.data.asset.name, Validators.required],
        amount: [this.data.asset.amount, Validators.required],
        description: [this.data.asset.description],
        myAccount: [this.data.asset.myAccount],
        startDate: [this.data.asset.startDate],
        withdrawalDate: [this.data.asset.withdrawalDate],
        fee: [this.data.asset.fee],
        stock: [this.data.asset.stock],
        periodNumber: [this.data.asset.periodNumber, Validators.required],
        periodName: [this.data.asset.periodName, Validators.required],
      })
    }

    //DropDown options for Turnus
    this.turnus = [
      { value: 'Woche', viewValue: 'Woche' },
      { value: 'Monat', viewValue: 'Monat' },
      { value: 'Jahr', viewValue: 'Jahr' },
    ];

    //DropDown options for Turnus
    this.accounts = [
      { value: 'DE58663500360010594379', viewValue: 'DE58663500360010594379' },
      { value: 'DE42660500360010524385', viewValue: 'DE42660500360010524385' },
    ];

    //DropDown options for stock
    this.stocks = [
      { value: 'TSLA', viewValue: 'TSLA' },
      { value: 'MSFT', viewValue: 'MSFT' },
      { value: 'INTC', viewValue: 'INTC' },
      { value: 'Wertpapier hinzufügen', viewValue: 'Wertpapier hinzufügen' },
    ];
  }

  closeDialog() {
    this.dialogRef.close(null);
  }

  submit() {
    if (this.assetForm.valid) {
      //data.btn = false --> Dialog wurde über Vertrag hinzufügen geöffnet, Löschen-button isdisabled. Dialog action = new um neuen Vertrag hinzuzüfugen
      if (this.data.btn == false) {
        let asset = this.assetForm.value as SavingsPlan;
        asset.uuidValue = uuid.v4();
        asset.dialogAction = 'new';
        this.dialogRef.close(asset);
      } else {

        this.data.asset.name = this.assetForm.get('name')?.value;
        this.data.asset.amount = this.assetForm.get('amount')?.value;
        this.data.asset.description = this.assetForm.get('description')?.value;
        this.data.asset.startDate = this.assetForm.get('startDate')?.value;
        this.data.asset.withdrawalDate = this.assetForm.get('withdrawalDate')?.value;
        this.data.asset.myAccount = this.assetForm.get('myAccount')?.value;
        this.data.asset.periodName = this.assetForm.get('periodName')?.value;
        this.data.asset.periodNumber = this.assetForm.get('periodNumber')?.value;
        this.data.asset.dialogAction = 'update';
        this.dialogRef.close(this.data.asset);
      }
    }
  }
  delete() {
    if (this.assetForm.valid) {
      this.data.asset.dialogAction = 'delete'
      this.dialogRef.close(this.data.asset);
    }
  }

}
