import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as uuid from 'uuid';
import { DropDown } from 'src/app/models/drowpdown-model';
import { Contract } from 'src/app/models/contract-model';

@Component({
  selector: 'app-contract-dialog',
  templateUrl: './contract-dialog.component.html',
  styleUrls: ['./contract-dialog.component.css']
})
export class ContractDialogComponent implements OnInit {

  public contractForm: FormGroup;
  public turnus: DropDown[];
  public isTaxRelevevantWhenCreated: Boolean;
  public isTaxRelevevantWhenEdited: Boolean;
  constructor(
    public dialogRef: MatDialogRef<ContractDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {

    if (this.data.btn == false) {
      //if dialog was opened with "add new"
      this.contractForm = this.fb.group({
        nameAndCost: "",
        name: [null, Validators.required],
        cost: [null, Validators.required],
        description: [null],
        category: [null],
        provider: [null],
        startDate: [null],
        endDate: [null],
        cancellationDate: [null],
        stacontractNumber: [null],
        periodNumber: [null, Validators.required],
        periodName: [null, Validators.required],
      })
    } else {
      //if dialog was opened with "edit"
      this.contractForm = this.fb.group({
        nameAndCost: [this.data.contract.name],
        name: [this.data.contract.name, Validators.required],
        cost: [this.data.contract.cost, Validators.required],
        description: [this.data.contract.description],
        category: this.data.contract.category,
        provider: [this.data.contract.provider],
        startDate: [this.data.contract.startDate],
        endDate: [this.data.contract.endDate],
        cancellationDate: [this.data.contract.cancellationDate],
        stacontractNumber: [this.data.contract.stacontractNumber],
        periodNumber: [this.data.contract.periodNumber, Validators.required],
        periodName: [this.data.contract.periodName, Validators.required],
      })
      this.isTaxRelevevantWhenEdited = this.data.contract.isTaxRelevant;
    }

    //DropDown options for Turnus
    this.turnus = [
      { value: 'Woche', viewValue: 'Woche' },
      { value: 'Monat', viewValue: 'Monat' },
      { value: 'Jahr', viewValue: 'Jahr' },
    ];
  }

  closeDialog() {
    this.data.contract.isTaxRelevant = this.isTaxRelevevantWhenEdited;
    this.dialogRef.close(null);
  }

  submit() {
    if (this.contractForm.valid) {
      if (this.data.btn == false) {
        let contract = this.contractForm.value as Contract;
        contract.uuidValue = uuid.v4();
        contract.dialogAction = 'new';
        contract.isTaxRelevant = this.isTaxRelevevantWhenCreated;
        this.dialogRef.close(contract);
      } else {
        // let tempUuid = this.data.abo.uuid;
        // let abo = this.aboForm.value as Abo;
        // abo.uuidValue = tempUuid;
        // abo.dialogAction = 'update';
        // this.dialogRef.close(abo);
        this.data.contract.name = this.contractForm.get('name')?.value;
        this.data.contract.cost = this.contractForm.get('cost')?.value;
        this.data.contract.description = this.contractForm.get('description')?.value;
        this.data.contract.provider = this.contractForm.get('provider')?.value;
        this.data.contract.startDate = this.contractForm.get('startDate')?.value;
        this.data.contract.endDate = this.contractForm.get('endDate')?.value;
        this.data.contract.stacontractNumber = this.contractForm.get('stacontractNumber')?.value;
        this.data.contract.cancellationDate = this.contractForm.get('cancellationDate')?.value;
        this.data.contract.periodName = this.contractForm.get('periodName')?.value;
        this.data.contract.periodNumber = this.contractForm.get('periodNumber')?.value;
        this.data.contract.dialogAction = 'update';
        this.dialogRef.close(this.data.contract);
      }
    }
  }

  delete() {
    if (this.contractForm.valid) {
      this.data.contract.dialogAction = 'delete'
      this.dialogRef.close(this.data.contract);
    }
  }

  onChangeCheckBox(event: any) {
    if (event.checked && this.data.btn) {
      this.data.contract.isTaxRelevant = true;
    } else if (!event.checked && this.data.btn) {
      this.data.contract.isTaxRelevant = false;
    } else if (event.checked && !this.data.btn) {
      this.isTaxRelevevantWhenCreated = true;
    } else if (!event.checked && !this.data.btn) {
      this.isTaxRelevevantWhenCreated = false;
    }
  }
}
