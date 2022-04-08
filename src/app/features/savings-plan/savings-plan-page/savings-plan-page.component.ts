import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as uuid from 'uuid';
import { SavingsPlan } from 'src/app/models/savings-plan-model';
import { SpAssetsDialogComponent } from '../sp-assets-dialog/sp-assets-dialog.component';
import { SpPaymentDialogComponent } from '../sp-payment-dialog/sp-payment-dialog.component';


@Component({
  selector: 'app-savings-plan-page',
  templateUrl: './savings-plan-page.component.html',
  styleUrls: ['./savings-plan-page.component.css']
})
export class SavingsPlanPageComponent implements OnInit {

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.assignAssetNameAndCost(true, this.emptyAsset);
    this.assignPaymentNameAndCost(true, this.emptyPayment);
  }

  //Dummy Data for first contract entries
  public payments: SavingsPlan[] = [
    {
      nameAndCost: '',
      name: 'Gemeinschaftskonto',
      amount: 1000,
      description: 'Gemeinsames Konto für Miete und Einkäufe',
      uuidValue: uuid.v4(),
      dialogAction: 'none',
      withdrawalDate: 19,
      periodNumber: 1,
      periodName: 'Monat',
      fee: 0,
      stock: '',
      myAccount: 'DE58663500360010594379',
      transactionAccount: 'DE42660500360010524385',
      portfolio: '',
      startDate : new Date(2022,3,3),
    }
  ]

  //Dummy Data for first abo entries
  public assets: SavingsPlan[] = [
    {
      nameAndCost: '',
      name: 'Tesla Sparplan',
      amount: 200,
      description: '',
      uuidValue: uuid.v4(),
      dialogAction: 'none',
      withdrawalDate: 24,
      periodNumber: 1,
      periodName: 'Monat',
      fee: 1.50,
      stock: 'TSLA',
      myAccount: 'DE58663500360010594379',
      transactionAccount: '',
      portfolio: 'DeKa Depot',
      startDate : new Date(2022,2,2),
    },
    {
      nameAndCost: '',
      name: 'Microsoft Sparplan',
      amount: 50,
      description: '',
      uuidValue: uuid.v4(),
      dialogAction: 'none',
      withdrawalDate: 13,
      periodNumber: 2,
      periodName: 'Monat',
      fee: 1.5,
      stock: 'MSFT',
      myAccount: 'DE58663500360010594379',
      transactionAccount: '',
      portfolio: 'DKB Depot',
      startDate : new Date(2022,1,1),
    }
  ]

  public emptyPayment: SavingsPlan = {
    nameAndCost: '',
    name: '',
    amount: 0,
    description: '',
    uuidValue: uuid.v4(),
    dialogAction: 'none',
    withdrawalDate: 19,
    periodNumber: 1,
    periodName: '',
    fee: 0,
    stock: '',
    myAccount: '',
    transactionAccount: '',
    portfolio: '',
    startDate : new Date(2022,1.1),
  }

  public emptyAsset: SavingsPlan = {
    nameAndCost: '',
    name: '',
    amount: 0,
    description: '',
    uuidValue: uuid.v4(),
    dialogAction: 'none',
    withdrawalDate: 19,
    periodNumber: 1,
    periodName: '',
    fee: 0,
    stock: '',
    myAccount: '',
    transactionAccount: '',
    portfolio: '',
    startDate : new Date(2022,1.1),
  }

  openAssetDialog(asset: SavingsPlan, delBtnIsVisible: Boolean) {
    const dialogRef = this.dialog.open(SpAssetsDialogComponent, {
      data: { asset: asset, btn: delBtnIsVisible }
    });
    dialogRef.afterClosed().subscribe(x => this.dialogAssetAction(x));
  }

  openPaymentDialog(payment: SavingsPlan, delBtnIsVisible: Boolean) {
    const dialogRef = this.dialog.open(SpPaymentDialogComponent, {
      data: { payment: payment, btn: delBtnIsVisible }
    });
    dialogRef.afterClosed().subscribe(x => this.dialogPaymentAction(x));
  }

  dialogAssetAction(returnedAsset: SavingsPlan) {
    console.log(returnedAsset.dialogAction);
    if (returnedAsset.dialogAction == 'delete') {
      //deletes entry
      const index = this.assets.findIndex(x => x.uuidValue === returnedAsset.uuidValue);
      this.assets.splice(index, 1);
    } else if (returnedAsset.dialogAction == 'new') {
      //adds new entry
      this.assignPaymentNameAndCost(false, returnedAsset);
      this.assets.push(returnedAsset);
    } else if (returnedAsset.dialogAction == 'update') {
      //updates changes
      this.assignPaymentNameAndCost(false, returnedAsset);
    }
  }

  dialogPaymentAction(returnedPayment: SavingsPlan) {

    if (returnedPayment.dialogAction == 'delete') {
      //deletes entry
      const index = this.payments.findIndex(x => x.uuidValue === returnedPayment.uuidValue);
      this.payments.splice(index, 1);
    } else if (returnedPayment.dialogAction == 'new') {
      //adds new entry
      this.assignPaymentNameAndCost(false, returnedPayment);
      this.payments.push(returnedPayment);
    } else if (returnedPayment.dialogAction == 'update') {
      //updates changes
      this.assignPaymentNameAndCost(false, returnedPayment);
    }
  }

  private assignPaymentNameAndCost(onStart: Boolean, returnedPayment: SavingsPlan) {
    if (onStart) {
      this.payments.forEach(payment => {
        this.transformNameAndCost(payment);
      });
    } else {
      this.transformNameAndCost(returnedPayment);
    }
  }

  private assignAssetNameAndCost(onStart: Boolean, returnedAsset: SavingsPlan) {
    if (onStart) {
      this.assets.forEach(asset => {
        this.transformNameAndCost(asset);
      });
    } else {
      this.transformNameAndCost(returnedAsset);
    }
  }

  transformNameAndCost(paymentOrAsset: any) {
    if (paymentOrAsset.periodNumber == 1) {
      paymentOrAsset.nameAndCost = `${paymentOrAsset.name} mit ${paymentOrAsset.amount} € pro ${paymentOrAsset.periodName}`;
    } else {
      switch (paymentOrAsset.periodName) {
        case "Woche": paymentOrAsset.nameAndCost = `${paymentOrAsset.name} mit ${paymentOrAsset.amount} € alle ${paymentOrAsset.periodNumber} Wochen`; break;
        case "Monat": paymentOrAsset.nameAndCost = `${paymentOrAsset.name} mit ${paymentOrAsset.amount} € alle ${paymentOrAsset.periodNumber} Monate`; break;
        case "Jahr": paymentOrAsset.nameAndCost = `${paymentOrAsset.name} mit ${paymentOrAsset.amount} € alle ${paymentOrAsset.periodNumber} Jahre`; break;
        default: null;
      }
    }
  }

}

