import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SavingsRateDialogComponent } from '../savings-rate-dialog/savings-rate-dialog.component';
import { SavingsRate } from 'src/app/models/saving-rate-model';
import * as uuid from 'uuid';
@Component({
  selector: 'app-savings-rate-page',
  templateUrl: './savings-rate-page.component.html',
  styleUrls: ['./savings-rate-page.component.css']
})
export class SavingsRatePageComponent implements OnInit {

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.assignTurnus(true, this.emptyRate);
    this.calculateRate(this.emptyRate);
  }


  public savingsRates: SavingsRate[] = [
    {
      targetValue: 12000,
      savingRate: 500,
      startDate: new Date(2022, 2, 15),
      endDate: new Date(2024, 2, 15),
      description: 'Da das aktuelle Auto bald den Geist aufgibt',
      name: 'Auto',
      periodName: 'Monat',
      periodNumber: 1,
      nameAndRate: '',
      uuidValue: uuid.v4(),
      dialogAction: 'none',
      turnus: '',
    },
    {
      targetValue: 4000,
      savingRate: 153.85,
      startDate: new Date(2022, 3, 16),
      endDate: new Date(2023, 3, 16),
      description: 'Aloha, Mahalo und Hula',
      name: 'Hawaii Reise',
      periodName: 'Woche',
      periodNumber: 2,
      nameAndRate: '',
      uuidValue: uuid.v4(),
      dialogAction: 'none',
      turnus: '',
    },

  ]

  public emptyRate: SavingsRate = {
    targetValue: 0,
    savingRate: 0,
    startDate: new Date(),
    endDate: new Date(),
    description: '',
    name: '',
    periodName: '',
    periodNumber: 0,
    nameAndRate: '',
    uuidValue: uuid.v4(),
    dialogAction: 'none',
    turnus: '',
  }


  openDialog(savingsRate: SavingsRate, delBtnIsVisible: Boolean) {
    const dialogRef = this.dialog.open(SavingsRateDialogComponent, {
      data: { savingsRate: savingsRate, btn: delBtnIsVisible }
    });
    dialogRef.afterClosed().subscribe(x => this.dialogAction(x));
  }


  dialogAction(returnedRate: SavingsRate) {

    if (returnedRate.dialogAction == 'delete') {
      //deletes entry
      const index = this.savingsRates.findIndex(x => x.uuidValue === returnedRate.uuidValue);
      this.savingsRates.splice(index, 1);
    } else if (returnedRate.dialogAction == 'new') {
      //adds new entry
      this.assignTurnus(false, returnedRate);
      this.calculateRate(returnedRate);
      this.savingsRates.push(returnedRate);
    } else if (returnedRate.dialogAction == 'update') {
      //updates changes
      this.calculateRate(returnedRate);
      this.assignTurnus(false, returnedRate);
    }
  }

  private assignTurnus(onStart: Boolean, returnedRate: SavingsRate) {
    if (onStart) {
      this.savingsRates.forEach(savingsRate => {
        this.transformTurnus(savingsRate);
      });
    } else {
      this.transformTurnus(returnedRate);
    }
  }


  transformTurnus(savingsRate: SavingsRate) {
    if (savingsRate.periodNumber == 1) {
      savingsRate.turnus = `einmal pro ${savingsRate.periodName}`;
    } else {
      switch (savingsRate.periodName) {
        case "Woche": savingsRate.turnus = `alle ${savingsRate.periodNumber} Wochen`; break;
        case "Monat": savingsRate.turnus = `alle ${savingsRate.periodNumber} Monate`; break;
        case "Jahr": savingsRate.turnus = `alle ${savingsRate.periodNumber} Jahre`; break;
        default: null;
      }
    }
  }

  calculateRate(savingsRate: SavingsRate) {
    let timeInSek = (savingsRate.endDate.getTime() - savingsRate.startDate.getTime()) / 1000;

    switch (savingsRate.periodName) {
      case "Woche": savingsRate.savingRate = this.checkSavingRate(savingsRate,604800,timeInSek);break;
      case "Monat": savingsRate.savingRate = this.checkSavingRate(savingsRate,2628000,timeInSek);break;
      case "Jahr":  savingsRate.savingRate = this.checkSavingRate(savingsRate,31536000,timeInSek);break;
      default: null;
    }
  }


  checkSavingRate(savingsRate : SavingsRate, periodNameInSek : number, timeInSek : number){
    let periodRounded = Math.round(timeInSek / periodNameInSek);
    return savingsRate.savingRate = Math.round(savingsRate.targetValue / periodRounded * savingsRate.periodNumber * 100) / 100;
  }

}

