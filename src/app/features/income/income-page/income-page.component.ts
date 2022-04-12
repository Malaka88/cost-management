import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { BookingModel } from 'src/app/models/booking-model';
import * as uuid from 'uuid';
import { IncomeDilaogComponent } from '../income-dilaog/income-dilaog.component';
import { FixDialogComponent } from '../fix-dialog/fix-dialog.component';
import { MatTableDataSource } from '@angular/material/table';

import { CreateIncomeDialogComponent } from '../create-income-dialog/create-income-dialog.component';

@Component({
  selector: 'app-income-page',
  templateUrl: './income-page.component.html',
  styleUrls: ['./income-page.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class IncomePageComponent implements OnInit {
  constructor(private dialog: MatDialog,) { }

  ngOnInit(): void {
    this.dataSource.data=this.bookingData;
    this.assignTurnus(true, this.emptyBookingData);
  }

  displayedColumns: string[] = ['date', 'amount', 'name','account'];
  dataSource = new MatTableDataSource<BookingModel>();
  columnsToDisplay = ['date', 'amount', 'name','account'];
  expandedElement: BookingModel | null;

  public emptyBookingData: BookingModel = {
    date: new Date(2022, 1, 1),
    name: '',
    amount: 0,
    category: '',
    isTaxRelevant: false,
    uuidValue: uuid.v4(),
    dialogAction: 'none',
    transactionAccount: '',
    myAccount: '',
    periodName: '',
    periodNumber: 0,
    isFixCost:false,
    turnus:'',
  }

  public bookingData: BookingModel[] = [
    {
      date: new Date(2022, 2, 17),
      name: 'Gehalt Hauptarbeitgeber',
      amount: 2500,
      category: 'Einkommen',
      isTaxRelevant: false,
      uuidValue: uuid.v4(),
      dialogAction: 'none',
      transactionAccount: 'DE72560301010211254724',
      myAccount: 'DE92603004700125821366',
      periodName: 'Monat',
      periodNumber: 1,
      isFixCost:true,
      turnus:'',
    },
    {
      date: new Date(2022, 2, 16),
      name: 'Dividende Tesla Aktien',
      amount: 100,
      category: 'Dividende',
      isTaxRelevant: true,
      uuidValue: uuid.v4(),
      dialogAction: 'none',
      transactionAccount: 'DE52660301010210254789',
      myAccount: 'DE11522103600253841898',
      periodName: 'einmalig',
      periodNumber: 1,
      isFixCost:false,
      turnus:'',
    },
    {
      date: new Date(2022, 2, 13),
      name: 'Gehalt Nebenjob',
      amount: 450,
      category: 'Einkauf',
      isTaxRelevant: false,
      uuidValue: uuid.v4(),
      dialogAction: 'none',
      transactionAccount: 'DE42663500311457824781',
      myAccount: 'DE72560301010211254724',
      periodName: 'Monat',
      periodNumber: 1,
      isFixCost:true,
      turnus:'',
    },
    {
      date: new Date(2022, 2, 10),
      name: 'Rückzahlung Leihgeld',
      amount: 250,
      category: 'Sonstiges',
      isTaxRelevant: false,
      uuidValue: uuid.v4(),
      dialogAction: 'none',
      transactionAccount: 'DE52614003600145782478',
      myAccount: 'DE11522103600253841898',
      periodName: 'einmalig',
      periodNumber: 1,
      isFixCost:false,
      turnus:'',
    },{
      date: new Date(2022, 1, 17),
      name: 'Gehalt Hauptarbeitgeber',
      amount: 2500,
      category: 'Einkommen',
      isTaxRelevant: false,
      uuidValue: uuid.v4(),
      dialogAction: 'none',
      transactionAccount: 'DE72560301010211254724',
      myAccount: 'DE92603004700125821366',
      periodName: 'Monat',
      periodNumber: 1,
      isFixCost:false,
      turnus:'',
    },
    
  ]

  openIncomeDialog(bookingData: BookingModel, delBtnIsVisible: Boolean) {
    console.log(this.bookingData);
    const dialogRef = this.dialog.open(IncomeDilaogComponent, {
      data: { bookingData: bookingData, btn: delBtnIsVisible }
    });
    dialogRef.afterClosed().subscribe(x => this.dialogTransactionAction(x));
  }

  openFixDialog(bookingData: BookingModel, delBtnIsVisible: Boolean) {
    console.log(this.bookingData);
    const dialogRef = this.dialog.open(FixDialogComponent, {
      data: { bookingData: bookingData, btn: delBtnIsVisible }
    });
    dialogRef.afterClosed().subscribe(x => this.dialogTransactionAction(x));
  }

  dialogTransactionAction(returnedTransaction: BookingModel) {
    if (returnedTransaction.dialogAction == 'delete') {
      //deletes entry
      const index = this.bookingData.findIndex(x => x.uuidValue === returnedTransaction.uuidValue);
      this.bookingData.splice(index, 1);
      this.dataSource.data = this.bookingData;
    } else if (returnedTransaction.dialogAction == 'new') {
      //adds new entr
      this.assignTurnus(false, returnedTransaction);
      this.bookingData.unshift(returnedTransaction);
      this.dataSource.data = this.bookingData;
    } else if (returnedTransaction.dialogAction == 'update') {
      //updates changes
      this.assignTurnus(false, returnedTransaction);
      this.dataSource.data = this.bookingData;
    }
  }

  private assignTurnus(onStart: Boolean, returnedTransaction: BookingModel) {
    if (onStart) {
      this.bookingData.forEach(data => {
        this.transformTurnus(data);
      });
    } else {
      this.transformTurnus(returnedTransaction);
    }
  }

  transformTurnus(returnedTransaction: BookingModel) {
    if (returnedTransaction.periodNumber == 1) {
      returnedTransaction.turnus = `einmal pro ${returnedTransaction.periodName}`;
    } else {
      switch (returnedTransaction.periodName) {
        case "Woche": returnedTransaction.turnus = `alle ${returnedTransaction.periodNumber} Wochen`; break;
        case "Monat": returnedTransaction.turnus = `alle ${returnedTransaction.periodNumber} Monate`; break;
        case "Jahr": returnedTransaction.turnus = `alle ${returnedTransaction.periodNumber} Jahre`; break;
        default: null;
      }
    }
  }

}
