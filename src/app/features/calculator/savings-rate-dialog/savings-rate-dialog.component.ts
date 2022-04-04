import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as uuid from 'uuid';
import { SavingsRate } from 'src/app/models/saving-rate-model';
import { DropDown } from 'src/app/models/drowpdown-model';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-savings-rate-dialog',
  templateUrl: './savings-rate-dialog.component.html',
  styleUrls: ['./savings-rate-dialog.component.css']
})
export class SavingsRateDialogComponent implements OnInit {

  public savingRateForm: FormGroup;
  public turnus: DropDown[];
  constructor(
    public dialogRef: MatDialogRef<SavingsRateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {

    if (this.data.btn == false) {
      //if dialog was opened with "add new"
      this.savingRateForm = this.fb.group({
        targetValue: [null, Validators.required],
        startDate: [null, Validators.required],
        endDate: [null, Validators.required],
        description: [null],
        name: [null, Validators.required],
        periodName: [null, Validators.required],
        periodNumber: [null, Validators.required],
      })
    } else {
      //if dialog was opened with "edit"
      this.savingRateForm = this.fb.group({
        targetValue: [this.data.savingsRate.targetValue, Validators.required],
        startDate: [this.data.savingsRate.startDate, Validators.required],
        endDate: [this.data.savingsRate.endDate, Validators.required],
        description: [this.data.savingsRate.description],
        name: [this.data.savingsRate.name, Validators.required],
        periodName: [this.data.savingsRate.periodName, Validators.required],
        periodNumber: [this.data.savingsRate.periodNumber, Validators.required],
      })
    }

    //DropDown options for Turnus
    this.turnus = [
      { value: 'Woche', viewValue: 'Woche' },
      { value: 'Monat', viewValue: 'Monat' },
      { value: 'Jahr', viewValue: 'Jahr' },
    ];

  }

  closeDialog() {
    this.dialogRef.close(null);
  }

  submit() {

    if (this.savingRateForm.valid) {
      //data.btn = false --> Dialog wurde über Vertrag hinzufügen geöffnet, Löschen-button isdisabled. Dialog action = new um neuen Vertrag hinzuzüfugen
      if (this.data.btn == false) {
        let savingsRate = this.savingRateForm.value as SavingsRate;
        savingsRate.uuidValue = uuid.v4();
        savingsRate.dialogAction = 'new';
        if (this.checkValidTimeSpan(savingsRate))
          this.dialogRef.close(savingsRate);
        else
          Swal.fire("Ungültiger Turnus im gewählten Zeitraum");
      } else {
        this.data.savingsRate.targetValue = this.savingRateForm.get('targetValue')?.value;
        this.data.savingsRate.startDate = this.savingRateForm.get('startDate')?.value;
        this.data.savingsRate.endDate = this.savingRateForm.get('endDate')?.value;
        this.data.savingsRate.description = this.savingRateForm.get('description')?.value;
        this.data.savingsRate.name = this.savingRateForm.get('name')?.value;
        this.data.savingsRate.periodName = this.savingRateForm.get('periodName')?.value;
        this.data.savingsRate.periodNumber = this.savingRateForm.get('periodNumber')?.value;
        this.data.savingsRate.dialogAction = 'update';
        if (this.checkValidTimeSpan(this.data.savingsRate))
          this.dialogRef.close(this.data.savingsRate);
        else
          Swal.fire("Ungültiger Turnus im gewählten Zeitraum");
      }
    }
  }
  delete() {
    if (this.savingRateForm.valid) {
      this.data.savingsRate.dialogAction = 'delete'
      this.dialogRef.close(this.data.savingsRate);
    }
  }

  checkValidTimeSpan(sr: SavingsRate) {
    let timeInSek = (sr.endDate.getTime() - sr.startDate.getTime()) / 1000;
    let isValidTimeSpan: Boolean;
   
    switch (sr.periodName) {
      case "Woche": isValidTimeSpan = this.checkTimeSpanExceedance(sr, 604800, timeInSek); break;
      case "Monat": isValidTimeSpan = this.checkTimeSpanExceedance(sr, 2628000, timeInSek); break;
      case "Jahr": isValidTimeSpan = this.checkTimeSpanExceedance(sr, 31536000, timeInSek); break;
      default: isValidTimeSpan = false;
    }

    return isValidTimeSpan;
  }

  checkTimeSpanExceedance(sr: SavingsRate, periodNameInSek: number, timeInSek: number) {
    
    let periodRounded = Math.round(timeInSek / periodNameInSek)
    
    if (periodRounded >= sr.periodNumber) {
      console.log("sr.if:" + true);
      return true;
    } else{
      console.log("sr.if:" + false);
      return false;
    }
  }
}

