import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as uuid from 'uuid';
//import { stringify } from 'querystring';
import { Abo } from 'src/app/models/abo-model';
import { Turnus } from 'src/app/models/turnus-model';

@Component({
  selector: 'app-abo-dialog',
  templateUrl: './abo-dialog.component.html',
  styleUrls: ['./abo-dialog.component.css']
})
export class AboDialogComponent implements OnInit {

  public aboForm: FormGroup;
  public turnus : Turnus[];
  public selectedTurnus: string;
  public newAbo: Abo = {
    nameAndCost: "",
    name: "",
    cost: 0,
    description: "",
    category: "Abonnement",
    uuidValue: "",
    dialogAction: "",
    contract_number: "",
    start_date: "",
    end_date: "",
    cancellation_date : "",
    withdrawal_date: 0,
    period_number: 0,
    period_name: "",
  };
  constructor(
    public dialogRef: MatDialogRef<AboDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    //data.btn = false --> Dialog wurde über Vertrag hinzufügen geöffnet, Löschen-button isdisabled. Dialog action = new um neuen Vertrag hinzuzüfugen
    this.initForm();
  }

  initForm() {

    if (this.data.btn == false) {
      this.aboForm = this.fb.group({
        nameAndCost: "",
        name: [null, Validators.required],
        cost: [null, Validators.required],
        description: [null],
        category: [null],
        start_date: [null],
        end_date: [null],
        cancellation_date: [null],
        contract_number: [null],
        period_number: [null,Validators.required],
        period_name: [null],
        // period_name: [null,Validators.required],
      })
    } else {
      this.aboForm = this.fb.group({
        nameAndCost: [this.data.abo.name],
        name: [this.data.abo.name, Validators.required],
        cost: [this.data.abo.cost, Validators.required],
        description: [this.data.abo.description],
        category: this.data.abo.category,
        start_date: [this.data.abo.start_date],
        end_date: [this.data.abo.end_date],
        cancellation_date: [this.data.abo.cancellation_date],
        contract_number: [this.data.abo.contract_number],
        period_number: [this.data.abo.period_number,Validators.required],
        period_name: [this.data.abo.period_name],
        // period_name: [this.data.abo.period_name,Validators.required],
      })
    }
    
    this.turnus = [
      // {value: 'woche-0', viewValue: 'Woche'},
      // {value: 'monat-1', viewValue: 'Monat'},
      // {value: 'jahr-2', viewValue: 'Jahr'}

      {value: 'Woche', viewValue: 'Woche'},
      {value: 'Monat', viewValue: 'Monat'},
      {value: 'Jahr', viewValue: 'Jahr'},

    ];

  }

  closeDialog() {
    this.dialogRef.close(null);
  }

  submit() {
    if (this.aboForm.valid) {

      //data.btn = false --> Dialog wurde über Vertrag hinzufügen geöffnet, Löschen-button isdisabled. Dialog action = new um neuen Vertrag hinzuzüfugen
      if (this.data.btn == false) {
        console.log(this.selectedTurnus);
        console.log(this.newAbo);
        this.newAbo.name = this.aboForm.get('name')?.value;
        this.newAbo.cost = this.aboForm.get('cost')?.value;
        this.newAbo.description = this.aboForm.get('description')?.value;
        this.newAbo.contract_number = this.aboForm.get('contract_number')?.value;
        this.newAbo.start_date = this.aboForm.get('start_date')?.value;
        this.newAbo.end_date = this.aboForm.get('end_date')?.value;
        this.newAbo.cancellation_date = this.aboForm.get('cancellation_date')?.value;
        this.newAbo.uuidValue = uuid.v4();
        this.newAbo.dialogAction = 'new';
        this.newAbo.period_name = this.selectedTurnus;
        this.newAbo.period_number = this.aboForm.get('period_number')?.value;
        this.dialogRef.close(this.newAbo);
      } else {
        console.log(this.selectedTurnus);
        console.log(this.data.abo);
        this.data.abo.name = this.aboForm.get('name')?.value;
        this.data.abo.cost = this.aboForm.get('cost')?.value;
        this.data.abo.description = this.aboForm.get('description')?.value;
        this.data.abo.contract_number = this.aboForm.get('contract_number')?.value;
        this.data.abo.start_date = this.aboForm.get('start_date')?.value;
        this.data.abo.end_date = this.aboForm.get('end_date')?.value;
        this.data.abo.cancellation_date = this.aboForm.get('cancellation_date')?.value;
        this.data.abo.period_name = this.selectedTurnus;
        this.data.abo.period_number = this.aboForm.get('period_number')?.value;
        this.dialogRef.close(this.data.abo);
      }
    }
  }
  delete() {
    if (this.aboForm.valid) {
      this.data.abo.dialogAction = 'delete'
      this.dialogRef.close(this.data.abo);
    }
  }
}

