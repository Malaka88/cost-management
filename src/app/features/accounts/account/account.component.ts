import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/models/account-models';
import * as uuid from 'uuid';
import { AccountDialogComponent } from '../account-dialog/account-dialog.component';
import { NewAccountDialogComponent } from '../new-account-dialog/new-account-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent{

  constructor(private dialog: MatDialog) {
  }

  accounts: Account[] = [
    {
      name: 'Volksbank Karlsruhe',
      amount: 2323.44,
      imgPath: '../../../assets/img/vk-logo.jpg',
      route: 'vb-ka',
      bic: 'GENODE61KA1',
      iban: 'DE52660501010010254789',
      dialogAction: 'none',
      uuidValue: uuid.v4(),
    },
    {
      name: 'Sparkasse Karlsruhe',
      amount: 525.87,
      imgPath: '../../../assets/img/sparkasse-logo.png',
      route: 'sk-ka',
      bic: 'GENODE61KA1',
      iban: 'DE61661900000016827425',
      dialogAction: 'none',
      uuidValue: uuid.v4(),
    },
    {
      name: 'ING Einzelkonto',
      amount: 2912.23,
      imgPath: '../../../assets/img/ing-logo.jpeg',
      route: 'ing-ek',
      bic: 'INGDDEFFXXX',
      iban: 'DE42500105170014587635',
      dialogAction: 'none',
      uuidValue: uuid.v4(),
    },
    {
      name: 'ING Gemeinschaftskonto',
      amount: 5234.23,
      imgPath: '../../../assets/img/ing-logo.jpeg',
      route: 'ing-gk',
      bic: 'INGDDEFFXXX',
      iban: 'DE47500105170012570623',
      dialogAction: 'none',
      uuidValue: uuid.v4(),
    },
  ]

  emptyAccount : Account = {
      name: '',
      amount: 0,
      imgPath: '',
      route: '',
      bic: '',
      iban: '',
      dialogAction: 'none',
      uuidValue: uuid.v4()
  }

  openEditAccountDialog(account: Account, delBtnIsVisible: Boolean) {
    const dialogRef = this.dialog.open(AccountDialogComponent, {
      data: { account: account, btn: delBtnIsVisible }
    });
    dialogRef.afterClosed().subscribe(x => this.dialogAction(x));
  }

  openNewAccountDialog(account: Account,delBtnIsVisible: Boolean) {
    const dialogRef = this.dialog.open(NewAccountDialogComponent, {
      data: { account: account, btn: delBtnIsVisible},
      height: '180px',
      width: '350px'
    });
    dialogRef.afterClosed().subscribe(x => this.dialogAction(x));
  }



  dialogAction(returnedAccount: Account) {
    if (returnedAccount.dialogAction == 'delete') {
      //deletes entry
      const index = this.accounts.findIndex(x => x.uuidValue === returnedAccount.uuidValue);
      this.accounts.splice(index, 1);
    } else if (returnedAccount.dialogAction == 'new') {
      // this.accounts.push(returnedAccount);
      this.addBankAndAssignBankImage(returnedAccount);
    } else if (returnedAccount.dialogAction == 'update') {
      //updates changes
      null;
    }
  }

  addBankAndAssignBankImage(returnedAccount : Account){
    if(returnedAccount.name.includes("DKB")){
      returnedAccount.imgPath = '../../../assets/img/dkb-logo.jpg'
      returnedAccount.route = 'dkb';
    }else if(returnedAccount.name.includes("Volksbank")){
      returnedAccount.imgPath = '../../../assets/img/vk-logo.jpg'
      returnedAccount.route = 'vb';
    } else if(returnedAccount.name.includes("Sparkasse")){
      returnedAccount.imgPath = '../../../assets/img/sparkasse-logo.png'
      returnedAccount.route = 'sp';
    } else {
      returnedAccount.imgPath = '../../../assets/img/bank.jpg'
      returnedAccount.route = 'gen';
    }

    this.accounts.push(returnedAccount);
  }

}

