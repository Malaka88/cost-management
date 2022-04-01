import { HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS } from '@angular/cdk/a11y/high-contrast-mode/high-contrast-mode-detector';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
//import { stringify } from 'querystring';
import * as uuid from 'uuid';
import { Abo } from 'src/app/models/abo-model';

@Component({
  selector: 'app-new-abo-dialog',
  templateUrl: './new-abo-dialog.component.html',
  styleUrls: ['./new-abo-dialog.component.css']
})
export class NewAboDialogComponent implements OnInit {

  public newAboForm: FormGroup;
  public data: Abo;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<NewAboDialogComponent>,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.newAboForm = this.fb.group({
      name: [null, Validators.required],
      cost: [null, Validators.required],
      description: [null],
      category: null,
      start_date: [null],
      end_date: [null],
      cancellation_date: [null],
      contract_number: [null],
    })
  }

  closeDialog() {
    this.dialogRef.close(null);
  }

  submit() {
    if (this.newAboForm.valid) {
      let data = <Abo><unknown>{
        name: '',
        category: 'Abonnements',
        cost: 0,
        description: '',
        uuidValue: uuid.v4(),
        dialogAction: 'new',
        contract_number: '',
        start_date: '',
        end_date: '',
        cancellation_date: '',
        withdrawal_date: 1,
        period_number: 1,
        period_name: 'Monat',
      };
      console.log("submit");
      data.name = this.newAboForm.get('name')?.value;
      data.cost = this.newAboForm.get('cost')?.value;
      data.description = this.newAboForm.get('description')?.value;
      console.log(data);
      this.dialogRef.close(data);
    }

  }
}
