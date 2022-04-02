import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as uuid from 'uuid';
//import { stringify } from 'querystring';
import { Abo } from 'src/app/models/abo-model';

@Component({
  selector: 'app-abo-dialog',
  templateUrl: './abo-dialog.component.html',
  styleUrls: ['./abo-dialog.component.css']
})
export class AboDialogComponent implements OnInit {

  public aboForm: FormGroup;
  public newAbo: Abo = {
    name: "",
    cost: 0,
    description: "",
    category: "",
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
        name: [null, Validators.required],
        cost: [null, Validators.required],
        description: [null],
        category: [null],
        start_date: [null],
        end_date: [null],
        cancellation_date: [null],
        contract_number: [null],
      })
    } else {
      this.aboForm = this.fb.group({
        name: [this.data.abo.name, Validators.required],
        cost: [this.data.abo.cost, Validators.required],
        description: [this.data.abo.description],
        category: this.data.abo.category,
        start_date: [this.data.abo.start_date],
        end_date: [this.data.abo.end_date],
        cancellation_date: [this.data.abo.cancellation_date],
        contract_number: [this.data.abo.contract_number],
      })
    }
  }

  closeDialog() {
    this.dialogRef.close(null);
  }

  submit() {
    if (this.aboForm.valid) {

      //data.btn = false --> Dialog wurde über Vertrag hinzufügen geöffnet, Löschen-button isdisabled. Dialog action = new um neuen Vertrag hinzuzüfugen
      if (this.data.btn == false) {
        this.newAbo.name = this.aboForm.get('name')?.value;
        this.newAbo.cost = this.aboForm.get('cost')?.value;
        this.newAbo.description = this.aboForm.get('description')?.value;
        this.newAbo.contract_number = this.aboForm.get('contract_number')?.value;
        this.newAbo.start_date = this.aboForm.get('start_date')?.value;
        this.newAbo.end_date = this.aboForm.get('end_date')?.value;
        this.newAbo.cancellation_date = this.aboForm.get('cancellation_date')?.value;
        this.newAbo.uuidValue = uuid.v4();
        this.newAbo.dialogAction = 'new';
        this.dialogRef.close(this.newAbo);
      } else {
        this.data.abo.name = this.aboForm.get('name')?.value;
        this.data.abo.cost = this.aboForm.get('cost')?.value;
        this.data.abo.description = this.aboForm.get('description')?.value;
        this.data.abo.contract_number = this.aboForm.get('contract_number')?.value;
        this.data.abo.start_date = this.aboForm.get('start_date')?.value;
        this.data.abo.end_date = this.aboForm.get('end_date')?.value;
        this.data.abo.cancellation_date = this.aboForm.get('cancellation_date')?.value;
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
