import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { IncomeTableModel } from 'src/app/models';

@Component({
  selector: 'app-create-income-dialog',
  templateUrl: './create-income-dialog.component.html',
  styleUrls: ['./create-income-dialog.component.css']
})
export class CreateIncomeDialogComponent implements OnInit {

  public incomeForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CreateIncomeDialogComponent>
  ) { }

  ngOnInit(): void {
    this.incomeForm = this.fb.group({
      origin: [null, Validators.required],
      incomeMoney: [null, Validators.required],
      incomeDate: [null, Validators.required],
    })
  }

  cancel() {
    this.dialogRef.close(null);
  }

  save() {
    this.dialogRef.close(this.incomeForm.value as IncomeTableModel);
  }

}
