import { Component, Inject, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { BookingModel } from 'src/app/models/booking-model';
import * as uuid from 'uuid';
import { MatDialog } from '@angular/material/dialog';
import { TransactionDialogComponent } from '../transaction-dialog/transaction-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

/**
 * @title Table with expandable rows
 */
@Component({
  selector: 'app-account-booking',
  templateUrl: './account-booking.component.html',
  styleUrls: ['./account-booking.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AccountBookingComponent implements OnInit {

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
    periodName: '',
    periodNumber: 0,
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
    },
    {
      date: new Date(2022, 1, 13),
      name: 'Amazon',
      amount: -27.99,
      category: 'Einkauf',
      isTaxRelevant: false,
      uuidValue: uuid.v4(),
      dialogAction: 'none',
      transactionAccount: 'DE42663500366011457824781',
      periodName: 'einmalig',
      periodNumber: 1,
    },
    {
      date: new Date(2022, 1, 10),
      name: 'Edeka',
      amount: -168,
      category: 'Abonnement',
      isTaxRelevant: false,
      uuidValue: uuid.v4(),
      dialogAction: 'none',
      transactionAccount: 'DE61463500366011457824781',
      periodName: 'einmalig',
      periodNumber: 1,
    },
    {
      date: new Date(2022, 1, 3),
      name: 'Netflix',
      amount: -4.99,
      category: 'Abonnement',
      isTaxRelevant: false,
      uuidValue: uuid.v4(),
      dialogAction: 'none',
      transactionAccount: 'DE72560301010211254724',
      periodName: 'Monat',
      periodNumber: 1,
    },
    {
      date: new Date(2022, 1, 2),
      name: 'Berufsunfähigkeitsversicherung',
      amount: -60,
      category: 'Versicherung',
      isTaxRelevant: false,
      uuidValue: uuid.v4(),
      dialogAction: 'none',
      transactionAccount: 'DE42663500366011457824781',
      periodName: 'Monat',
      periodNumber: 1,
    },
    {
      date: new Date(2022, 1, 2),
      name: 'Spotify',
      amount: -4.99,
      category: 'Abonnement',
      isTaxRelevant: false,
      uuidValue: uuid.v4(),
      dialogAction: 'none',
      transactionAccount: 'DE42663500366011457824781',
      periodName: 'Monat',
      periodNumber: 1,
    },
    {
      date: new Date(2022, 1, 2),
      name: 'Strom',
      amount: -70,
      category: 'Abonnement',
      isTaxRelevant: false,
      uuidValue: uuid.v4(),
      dialogAction: 'none',
      transactionAccount: 'DE61463500366011457824781',
      periodName: 'Monat',
      periodNumber: 1,
    },
    {
      date: new Date(2022, 1, 2),
      name: 'Miete',
      amount: -600,
      category: 'Miete',
      isTaxRelevant: false,
      uuidValue: uuid.v4(),
      dialogAction: 'none',
      transactionAccount: 'DE82463500366011457824781',
      periodName: 'Monat',
      periodNumber: 1,
    },
    {
      date: new Date(2022, 1, 1),
      name: 'Gehalt DiMaSi GmbH',
      amount: 2500,
      category: 'Gehalt',
      isTaxRelevant: false,
      uuidValue: uuid.v4(),
      dialogAction: 'none',
      transactionAccount: 'DE72560301010211254724',
      periodName: 'Monat',
      periodNumber: 1,
    },
  ]

  openTransactionDialog(bookingData: BookingModel, delBtnIsVisible: Boolean) {
    console.log(this.bookingData);
    const dialogRef = this.dialog.open(TransactionDialogComponent, {
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

