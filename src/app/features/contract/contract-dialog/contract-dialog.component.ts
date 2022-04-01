import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
//import { stringify } from 'querystring';
import { Contract } from 'src/app/models/contract-model';

@Component({
  selector: 'app-contract-dialog',
  templateUrl: './contract-dialog.component.html',
  styleUrls: ['./contract-dialog.component.css']
})
export class ContractDialogComponent implements OnInit {

  public contractForm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<ContractDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Contract,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.contractForm = this.fb.group({
      name: [this.data.name, Validators.required],
      cost: [this.data.cost, Validators.required],
      description: [this.data.description],
      category: this.data.category,
      provider: [this.data.provider],
      start_date: [this.data.start_date],
      end_date: [this.data.end_date],
      cancellation_date: [this.data.cancellation_date],
      contract_number: [this.data.contract_number],
    })
  }

  closeDialog() {
    this.dialogRef.close(null);
  }

  submit() {
    if (this.contractForm.valid) {
      this.data.name = this.contractForm.get('name')?.value;
      this.data.cost = this.contractForm.get('cost')?.value;
      this.data.description = this.contractForm.get('description')?.value;
      this.data.provider = this.contractForm.get('provider')?.value;
      this.data.start_date = this.contractForm.get('start_date')?.value;
      this.data.end_date = this.contractForm.get('end_date')?.value;
      this.data.contract_number = this.contractForm.get('contract_number')?.value;
      this.data.cancellation_date = this.contractForm.get('cancellation_date')?.value;
      this.dialogRef.close(this.data);
    }

  }

  delete() {
    if (this.contractForm.valid) {
      this.data.dialogAction='delete'
      this.dialogRef.close(this.data);
    }

  }

}
