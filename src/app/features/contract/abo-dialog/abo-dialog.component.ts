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
        startDate: [null],
        endDate: [null],
        cancellationDate: [null],
        contractNumber: [null],
        periodNumber: [null, Validators.required],
        periodName: [null, Validators.required],
      })
    } else {
      //if dialog was opened with "edit"
      this.aboForm = this.fb.group({
        nameAndCost: [this.data.abo.name],
        name: [this.data.abo.name, Validators.required],
        cost: [this.data.abo.cost, Validators.required],
        description: [this.data.abo.description],
        category: [this.data.abo.category],
        startDate: [this.data.abo.startDate],
        endDate: [this.data.abo.endDate],
        cancellationDate: [this.data.abo.cancellationDate],
        contractNumber: [this.data.abo.contractNumber],
        periodNumber: [this.data.abo.periodNumber, Validators.required],
        periodName: [this.data.abo.periodName, Validators.required],
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
      { value: 'Kategorie Hinzufügen', viewValue: 'Kategorie Hinzufügen' },
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
        this.data.abo.contractNumber = this.aboForm.get('contractNumber')?.value;
        this.data.abo.startDate = this.aboForm.get('startDate')?.value;
        this.data.abo.endDate = this.aboForm.get('endDate')?.value;
        this.data.abo.cancellationDate = this.aboForm.get('cancellationDate')?.value;
        this.data.abo.category = this.aboForm.get('category')?.value;
        this.data.abo.periodName = this.aboForm.get('periodName')?.value;
        this.data.abo.periodNumber = this.aboForm.get('periodNumber')?.value;
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

