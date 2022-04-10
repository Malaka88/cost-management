import { Component, OnInit } from '@angular/core';
import { CreditCard } from 'src/app/models/creditcard-model';
import * as uuid from 'uuid';
import { CreditcardDialogComponent } from '../creditcard-dialog/creditcard-dialog.component';
import { NewCreditcardDialogComponent } from '../new-creditcard-dialog/new-creditcard-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-credit-card-page',
  templateUrl: './credit-card-page.component.html',
  styleUrls: ['./credit-card-page.component.css']
})
export class CreditCardPageComponent {

  constructor(private dialog: MatDialog) {
  }

  creditCards: CreditCard[] = [
    {
      name: 'Mastercard Sparkasse Karlsruhe',
      amount: -1178.06,
      imgPath: '../../../assets/img/mastercard.png',
      route: 'mc-sp',
      creditNardNumber: '5234 2589 1247 1337',
      expirationDay: new Date(2024, 3, 2),
      dialogAction: 'none',
      uuidValue: uuid.v4(),
    },
    {
      name: 'VISA DKB',
      amount: 0,
      imgPath: '../../../assets/img/visa.png',
      route: 'v-dkb',
      creditNardNumber: '4241 2586 2147 1587',
      expirationDay: new Date(2023, 11, 10),
      dialogAction: 'none',
      uuidValue: uuid.v4(),
    }
  ]

  emptyCreditCard: CreditCard = {
    name: '',
    amount: 0,
    imgPath: '',
    route: '',
    creditNardNumber: '',
    expirationDay: new Date(2022, 1, 1),
    dialogAction: 'none',
    uuidValue: uuid.v4()
  }

  openEditAccountDialog(creditCard: CreditCard, delBtnIsVisible: Boolean) {
    const dialogRef = this.dialog.open(CreditcardDialogComponent, {
      data: { creditCard: creditCard, btn: delBtnIsVisible }
    });
    dialogRef.afterClosed().subscribe(x => this.dialogAction(x));
  }

  openNewAccountDialog(creditCard: CreditCard, delBtnIsVisible: Boolean) {
    const dialogRef = this.dialog.open(NewCreditcardDialogComponent, {
      data: { creditCard: creditCard, btn: delBtnIsVisible },
      height: '210px',
      width: '350px'
    });
    dialogRef.afterClosed().subscribe(x => this.dialogAction(x));
  }



  dialogAction(returnedCard: CreditCard) {
    if (returnedCard.dialogAction == 'delete') {
      //deletes entry
      const index = this.creditCards.findIndex(x => x.uuidValue === returnedCard.uuidValue);
      this.creditCards.splice(index, 1);
    } else if (returnedCard.dialogAction == 'new') {
      // this.accounts.push(returnedAccount);
      this.addBankAndAssignBankImage(returnedCard);
    } else if (returnedCard.dialogAction == 'update') {
      this.addBankAndAssignBankImage(returnedCard);
      null;
    }
  }

  addBankAndAssignBankImage(returnedCard: CreditCard) {
    if (returnedCard.name.includes("VISA")) {
      returnedCard.imgPath = '../../../assets/img/visa.png'
      returnedCard.route = 'vis';
    } else if (returnedCard.name.includes("Mastercard")) {
      returnedCard.imgPath = '../../../assets/img/mastercard.png'
      returnedCard.route = 'mc';
    } else if (returnedCard.name.includes("Ame")) {
      returnedCard.imgPath = '../../../assets/img/amex.png'
      returnedCard.route = 'amex';
    } else {
      returnedCard.imgPath = '../../../assets/img/creditcard.jpg'
      returnedCard.route = 'gen';
    }

    if (returnedCard.dialogAction == 'new')
      this.creditCards.push(returnedCard);
  }

}

