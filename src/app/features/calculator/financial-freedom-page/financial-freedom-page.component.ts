import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-financial-freedom-page',
  templateUrl: './financial-freedom-page.component.html',
  styleUrls: ['./financial-freedom-page.component.css']
})
export class FinancialFreedomPageComponent implements OnInit {

  public finFreeForm: FormGroup;
  public investmentAmount: number;
  public doWhileEndtValue: number;
  public doWhileFinFreeTargetValue: number;
  public doWhileYearlyValue: number;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    // this.finFreeForm = this.fb.group({
    //   startingCapital: [null],
    //   netIncome: [null, Validators.required],
    //   currentAge: [null, Validators.required],
    //   pensionAge: [null, Validators.required],
    //   returnRate: [null, Validators.required],
    //   inflation: [null],
    //   tax: [null],
    // })

    this.finFreeForm = this.fb.group({
      startingCapital: [null],
      netIncome: [1500, Validators.required],
      currentAge: [25, Validators.required],
      pensionAge: [55, Validators.required],
      returnRate: [5, Validators.required],
      inflation: [1.84],
      tax: [26.375],
    })
  }


  calculate() {
    console.log("Button clicked");

    if (this.finFreeForm.valid) {

      let currentAge = this.finFreeForm.get('currentAge')?.value;
      let pensionAge = this.finFreeForm.get('pensionAge')?.value;
      let inflation = 1 - this.finFreeForm.get('inflation')?.value / 100;
      let returnRate = 1 + this.finFreeForm.get('returnRate')?.value / 100;
      let netIncome = this.finFreeForm.get('netIncome')?.value;
      let tax = 1 - this.finFreeForm.get('tax')?.value / 100;
      let finFreeTargetValue: number;

      //calculate wish Income value after X years of inflation
      let netIncomeWithInflation = netIncome + (netIncome - netIncome * inflation ** (pensionAge - currentAge));

      //calculate yearly target value to receive monthly wish income with X return rate, tax and inflation
      finFreeTargetValue = ((netIncomeWithInflation / inflation / tax) * 12) / (returnRate - 1);
      this.doWhileFinFreeTargetValue = finFreeTargetValue;

      //estimated monthly start value
      let whileStartValue = finFreeTargetValue * (1 - (returnRate - 1)) / (12 * (pensionAge - currentAge) * (1 + (1 - inflation)));
      let valueYearly = whileStartValue * 12;
      let valueStart = valueYearly;
      let valueEnd = 0;

      let firstloop = true;

      do {

        if (firstloop) {
          valueYearly = whileStartValue * 12;
          valueStart = valueYearly;
          valueEnd = 0;
          firstloop = false;
        } else {
          valueYearly = valueYearly - 1;
          valueStart = valueYearly;
          valueEnd = 0;
        }


        for (let index = 0; index < pensionAge - currentAge; index++) {
          valueEnd = ((((valueStart * returnRate) - valueStart) * tax) + valueStart) * inflation;
          valueStart = valueYearly + valueEnd;
        }

        console.log("valueEnd: " + valueEnd);
        console.log("finFreeTargetValue: " + finFreeTargetValue);
        console.log("ratio: " + valueEnd / finFreeTargetValue);
        this.doWhileEndtValue = valueEnd;
        this.doWhileYearlyValue = valueYearly;


      } while (this.doWhileEndtValue / this.doWhileFinFreeTargetValue > 1.0000005);


      console.log("value monthly:" + this.doWhileYearlyValue / 12);

      //Chnage values to 2 decimals
      let savingRate = Math.round(this.doWhileYearlyValue / 12 *100)/100;
      let finalCapital = Math.round(this.doWhileEndtValue *100)/100;
      let inflationIncome = Math.round(netIncomeWithInflation * 100)/100;


      Swal.fire("Bei einer monatlichen Sparrate von " + savingRate + " € hast du nach " + (pensionAge - currentAge) +
        " Jahren ein Endkapital von " + finalCapital + " € zusammen. Bei " + this.finFreeForm.get('returnRate')?.value + "% angelegt kannst du mit einer monatlichen Rente von " +
        inflationIncome + " € rechnen (Inflationärer Gegenwert von " + this.finFreeForm.get('netIncome')?.value+ " €).");

    }

  }
}
