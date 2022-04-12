import { Component, Inject, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { BookingModel } from 'src/app/models/booking-model';
import * as uuid from 'uuid';
import { MatDialog } from '@angular/material/dialog';
import { CreditcardTransactionDialogComponent } from '../creditcard-transaction-dialog/creditcard-transaction-dialog.component';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-creditcard-booking',
  templateUrl: './creditcard-booking.component.html',
  styleUrls: ['./creditcard-booking.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class CreditcardBookingComponent implements OnInit {

 constructor(private dialog: MatDialog,
    ) { }

    ngOnInit(): void {
      this.dataSource.data=this.bookingData;
    }

  dataSource = new MatTableDataSource<BookingModel>();
  columnsToDisplay = ['date', 'name', 'amount'];
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
      date: new Date(2022, 1, 17),
      name: 'Lufthansa',
      amount: -899.53,
      category: 'Flug',
      isTaxRelevant: false,
      uuidValue: uuid.v4(),
      dialogAction: 'none',
      transactionAccount: '',
      myAccount: 'DE11522103600253841898',
      periodName: 'einmalig',
      periodNumber: 1,
      isFixCost:false,
      turnus:'',
    },
    {
      date: new Date(2022, 1, 16),
      name: 'Aral Tankstelle Oststadt',
      amount: -65.57,
      category: 'Tanken',
      isTaxRelevant: false,
      uuidValue: uuid.v4(),
      dialogAction: 'none',
      transactionAccount: '',
      myAccount: 'DE11522103600253841898',
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
      transactionAccount: '',
      myAccount: 'DE11522103600253841898',
      periodName: 'einmalig',
      periodNumber: 1,
      isFixCost:false,
      turnus:'',
    },
    {
      date: new Date(2022, 1, 10),
      name: 'H&M Karlsruhe',
      amount: -89.99,
      category: 'Kleidung',
      isTaxRelevant: false,
      uuidValue: uuid.v4(),
      dialogAction: 'none',
      transactionAccount: '',
      myAccount: 'DE11522103600253841898',
      periodName: 'einmalig',
      periodNumber: 1,
      isFixCost:false,
      turnus:'',
    },
    {
      date: new Date(2022, 1, 10),
      name: 'Jack and Jones - Ettlinger Tor',
      amount: -69.99,
      category: 'Kleidung',
      isTaxRelevant: false,
      uuidValue: uuid.v4(),
      dialogAction: 'none',
      transactionAccount: '',
      myAccount: 'DE11522103600253841898',
      periodName: 'einmalig',
      periodNumber: 1,
      isFixCost:false,
      turnus:'',
    },
    {
      date: new Date(2022, 1, 10),
      name: 'Tom Tailor - Ettlinger Tor',
      amount: -24.99,
      category: 'Kleidung',
      isTaxRelevant: false,
      uuidValue: uuid.v4(),
      dialogAction: 'none',
      transactionAccount: '',
      myAccount: 'DE11522103600253841898',
      periodName: 'einmalig',
      periodNumber: 1,
      isFixCost:false,
      turnus:'',
    }
  ]

  openTransactionDialog(bookingData: BookingModel, delBtnIsVisible: Boolean) {
    console.log(this.bookingData);
    const dialogRef = this.dialog.open(CreditcardTransactionDialogComponent, {
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
      //adds new entry
      this.bookingData.unshift(returnedTransaction);
      this.dataSource.data = this.bookingData;
    } else if (returnedTransaction.dialogAction == 'update') {
      //updates changes
      this.dataSource.data = this.bookingData;
    }
  }

}

