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
        start_date: [null],
        end_date: [null],
        cancellation_date: [null],
        contract_number: [null],
        period_number: [null, Validators.required],
        period_name: [null, Validators.required],
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
        start_date: [this.data.contract.start_date],
        end_date: [this.data.contract.end_date],
        cancellation_date: [this.data.contract.cancellation_date],
        contract_number: [this.data.contract.contract_number],
        period_number: [this.data.contract.period_number, Validators.required],
        period_name: [this.data.contract.period_name, Validators.required],
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
    if (this.contractForm.valid) {
      if (this.data.btn == false) {
        let contract = this.contractForm.value as Contract;
        contract.uuidValue = uuid.v4();
        contract.dialogAction = 'new';
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
        this.data.contract.start_date = this.contractForm.get('start_date')?.value;
        this.data.contract.end_date = this.contractForm.get('end_date')?.value;
        this.data.contract.contract_number = this.contractForm.get('contract_number')?.value;
        this.data.contract.cancellation_date = this.contractForm.get('cancellation_date')?.value;
        this.data.contract.period_name = this.contractForm.get('period_name')?.value;
        this.data.contract.period_number = this.contractForm.get('period_number')?.value;
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
}
