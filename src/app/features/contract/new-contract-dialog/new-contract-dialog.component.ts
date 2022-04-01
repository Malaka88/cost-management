import { HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS } from '@angular/cdk/a11y/high-contrast-mode/high-contrast-mode-detector';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
//import { stringify } from 'querystring';
import * as uuid from 'uuid';
import { Contract } from 'src/app/models/contract-model';

@Component({
  selector: 'app-new-contract-dialog',
  templateUrl: './new-contract-dialog.component.html',
  styleUrls: ['./new-contract-dialog.component.css']
})
export class NewContractDialogComponent implements OnInit {

  public newContractForm: FormGroup;
  public data : Contract;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<NewContractDialogComponent>,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.newContractForm = this.fb.group({
      name: [null, Validators.required],
      cost: [null, Validators.required],
      description: [null],
      category: [null],
      provider: [null],
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
    if (this.newContractForm.valid) {
      let data = <Contract>{
        name: '',
        category: 'Versicherung',
        cost: 0,
        description: '',
        provider: '',
        uuidValue : uuid.v4(),
        dialogAction : 'new'
      };
      console.log("submit");
      data.name = this.newContractForm.get('name')?.value;
      data.cost = this.newContractForm.get('cost')?.value;
      data.description = this.newContractForm.get('description')?.value;
      data.provider = this.newContractForm.get('provider')?.value;
      console.log(data);
      this.dialogRef.close(data);
    }

  }
}
