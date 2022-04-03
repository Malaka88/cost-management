import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as uuid from 'uuid';
import { Abo } from 'src/app/models/abo-model';
import { DropDown } from 'src/app/models/drowpdown-model';

@Component({
  selector: 'app-abo-dialog',
  templateUrl: './abo-dialog.component.html',
  styleUrls: ['./abo-dialog.component.css']
})
export class AboDialogComponent implements OnInit {

  public aboForm: FormGroup;
  public turnus: DropDown[];
  public categories: DropDown[];
  constructor(
    public dialogRef: MatDialogRef<AboDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
  ) { }
  
  ngOnInit(): void {
    this.initForm();
  }

  initForm() {

    if (this.data.btn == false) {
      //if dialog was opened with "add new"
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
        period_number: [null, Validators.required],
        period_name: [null, Validators.required],
      })
    } else {
      //if dialog was opened with "edit"
      this.aboForm = this.fb.group({
        nameAndCost: [this.data.abo.name],
        name: [this.data.abo.name, Validators.required],
        cost: [this.data.abo.cost, Validators.required],
        description: [this.data.abo.description],
        category: [this.data.abo.category],
        start_date: [this.data.abo.start_date],
        end_date: [this.data.abo.end_date],
        cancellation_date: [this.data.abo.cancellation_date],
        contract_number: [this.data.abo.contract_number],
        period_number: [this.data.abo.period_number, Validators.required],
        period_name: [this.data.abo.period_name, Validators.required],
      })
    }

    //DropDown options for Turnus
    this.turnus = [
      { value: 'Woche', viewValue: 'Woche' },
      { value: 'Monat', viewValue: 'Monat' },
      { value: 'Jahr', viewValue: 'Jahr' },
    ];

    //DropDown options for category
    this.categories = [
      { value: 'Video Streaming', viewValue: 'Video Streaming' },
      { value: 'Musik Streaming', viewValue: 'Musik Streaming' },
      { value: 'Abonnement', viewValue: 'Abonnement' },
      { value: 'GEZ', viewValue: 'GEZ' },
      { value: 'Zeitschrift', viewValue: 'Zeitschrift' },
      { value: 'Sonstiges', viewValue: 'Sonstiges' },
    ];
  }

  closeDialog() {
    this.dialogRef.close(null);
  }

  submit() {
    if (this.aboForm.valid) {
      //data.btn = false --> Dialog wurde über Vertrag hinzufügen geöffnet, Löschen-button isdisabled. Dialog action = new um neuen Vertrag hinzuzüfugen
      if (this.data.btn == false) {
        let abo = this.aboForm.value as Abo;
        abo.uuidValue = uuid.v4();
        abo.dialogAction = 'new';
        this.dialogRef.close(abo);
      } else {
        // let tempUuid = this.data.abo.uuid;
        // let abo = this.aboForm.value as Abo;
        // abo.uuidValue = tempUuid;
        // abo.dialogAction = 'update';
        // this.dialogRef.close(abo);
        this.data.abo.name = this.aboForm.get('name')?.value;
        this.data.abo.cost = this.aboForm.get('cost')?.value;
        this.data.abo.description = this.aboForm.get('description')?.value;
        this.data.abo.contract_number = this.aboForm.get('contract_number')?.value;
        this.data.abo.start_date = this.aboForm.get('start_date')?.value;
        this.data.abo.end_date = this.aboForm.get('end_date')?.value;
        this.data.abo.cancellation_date = this.aboForm.get('cancellation_date')?.value;
        this.data.abo.category = this.aboForm.get('category')?.value;
        this.data.abo.period_name = this.aboForm.get('period_name')?.value;
        this.data.abo.period_number = this.aboForm.get('period_number')?.value;
        this.data.abo.dialogAction = 'update';
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

