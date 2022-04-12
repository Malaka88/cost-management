import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { BookingModel } from 'src/app/models/booking-model';
import * as uuid from 'uuid';
import { SpendigDialogComponent } from '../spendig-dialog/spendig-dialog.component';
import { FixcostDialogComponent } from '../fixcost-dialog/fixcost-dialog.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-speding-page',
  templateUrl: './speding-page.component.html',
  styleUrls: ['./speding-page.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class SpedingPageComponent implements OnInit {

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
    periodName: '',
    periodNumber: 0,
    isFixCost:false,
    turnus:'',
  }

  public bookingData: BookingModel[] = [
    {
      date: new Date(2022, 1, 17),
      name: 'Edeka',
      amount: -12.49,
      category: 'Abonnement',
      isTaxRelevant: false,
      uuidValue: uuid.v4(),
      dialogAction: 'none',
      transactionAccount: 'DE72560301010211254724',
      periodName: 'einmalig',
      periodNumber: 1,
      isFixCost:false,
      turnus:'',
    },
    {
      date: new Date(2022, 1, 16),
      name: 'Paypal',
      amount: -4.99,
      category: 'Abonnement',
      isTaxRelevant: false,
      uuidValue: uuid.v4(),
      dialogAction: 'none',
      transactionAccount: 'DE52660301010210254789',
      periodName: 'einmalig',
      periodNumber: 1,
      isFixCost:false,
      turnus:'',
    },
    {
      date: new Date(2022, 1, 13),
      name: 'Amazon',
      amount: -27.99,
      category: 'Einkauf',
      isTaxRelevant: false,
      uuidValue: uuid.v4(),
      dialogAction: 'none',
      transactionAccount: 'DE42663500311457824781',
      periodName: 'einmalig',
      periodNumber: 1,
      isFixCost:false,
      turnus:'',
    },
    {
      date: new Date(2022, 1, 10),
      name: 'Edeka',
      amount: -168,
      category: 'Abonnement',
      isTaxRelevant: false,
      uuidValue: uuid.v4(),
      dialogAction: 'none',
      transactionAccount: 'DE52614003600145782478',
      periodName: 'einmalig',
      periodNumber: 1,
      isFixCost:false,
      turnus:'',
    },
    {
      date: new Date(2022, 1, 3),
      name: 'Netflix',
      amount: -4.99,
      category: 'Abonnement',
      isTaxRelevant: false,
      uuidValue: uuid.v4(),
      dialogAction: 'none',
      transactionAccount: 'DE72560301010212547248',
      periodName: 'Monat',
      periodNumber: 1,
      isFixCost:true,
      turnus:'',
    },
    {
      date: new Date(2022, 1, 2),
      name: 'Berufsunfähigkeitsversicherung',
      amount: -60,
      category: 'Versicherung',
      isTaxRelevant: false,
      uuidValue: uuid.v4(),
      dialogAction: 'none',
      transactionAccount: 'DE42663500360014572511',
      periodName: 'Monat',
      periodNumber: 1,
      isFixCost:true,
      turnus:'',
    },
    {
      date: new Date(2022, 1, 2),
      name: 'Spotify',
      amount: -14.99,
      category: 'Abonnement',
      isTaxRelevant: false,
      uuidValue: uuid.v4(),
      dialogAction: 'none',
      transactionAccount: 'DE42663500360014572511',
      periodName: 'Monat',
      periodNumber: 3,
      isFixCost:true,
      turnus:'',
    },
    {
      date: new Date(2022, 1, 2),
      name: 'Strom',
      amount: -70,
      category: 'Abonnement',
      isTaxRelevant: false,
      uuidValue: uuid.v4(),
      dialogAction: 'none',
      transactionAccount: 'DE52614003600145782478',
      periodName: 'Monat',
      periodNumber: 1,
      isFixCost:true,
      turnus:'',
    },
    {
      date: new Date(2022, 1, 2),
      name: 'Miete',
      amount: -600,
      category: 'Miete',
      isTaxRelevant: false,
      uuidValue: uuid.v4(),
      dialogAction: 'none',
      transactionAccount: 'DE52614003600145782478',
      periodName: 'Monat',
      periodNumber: 1,
      isFixCost:true,
      turnus:'',
    },
  ]

  openTransactionDialog(bookingData: BookingModel, delBtnIsVisible: Boolean) {
    console.log(this.bookingData);
    const dialogRef = this.dialog.open(SpendigDialogComponent, {
      data: { bookingData: bookingData, btn: delBtnIsVisible }
    });
    dialogRef.afterClosed().subscribe(x => this.dialogTransactionAction(x));
  }

  openFixCostDialog(bookingData: BookingModel, delBtnIsVisible: Boolean) {
    console.log(this.bookingData);
    const dialogRef = this.dialog.open(FixcostDialogComponent, {
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
