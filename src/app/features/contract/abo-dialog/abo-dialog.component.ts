import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
//import { stringify } from 'querystring';
import { Abo } from 'src/app/models/abo-model';

@Component({
  selector: 'app-abo-dialog',
  templateUrl: './abo-dialog.component.html',
  styleUrls: ['./abo-dialog.component.css']
})
export class AboDialogComponent implements OnInit {

  public aboForm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<AboDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Abo,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.aboForm = this.fb.group({
      name: [this.data.name, Validators.required],
      cost: [this.data.cost, Validators.required],
      description: [this.data.description, Validators.required],
      category: this.data.category,
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
    if (this.aboForm.valid) {
      this.data.name = this.aboForm.get('name')?.value;
      this.data.cost = this.aboForm.get('cost')?.value;
      this.data.description = this.aboForm.get('description')?.value;
      this.data.contract_number = this.aboForm.get('contract_number')?.value;
      this.data.start_date = this.aboForm.get('start_date')?.value;
      this.data.end_date = this.aboForm.get('end_date')?.value;
      this.data.cancellation_date = this.aboForm.get('cancellation_date')?.value;
      this.dialogRef.close(this.data);
    }

  }

  delete() {
    if (this.aboForm.valid) {
      this.data.dialogAction='delete'
      this.dialogRef.close(this.data);
    }

  }

}
