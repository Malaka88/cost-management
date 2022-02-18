import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { BookingModel } from 'src/app/models/booking-model';

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
export class AccountBookingComponent {
  dataSource = bookingData;
  columnsToDisplay = ['date', 'name', 'amount'];
  expandedElement: BookingModel | null;
}

const bookingData: BookingModel[] = [
  {
    date: new Date(2022, 1, 17),
    name: 'Edeka',
    amount: -12.49,
    category: 'Abonnement'
  },
  {
    date: new Date(2022, 1, 16),
    name: 'Paypal',
    amount: -4.99,
    category: 'Abonnement'
  },
  {
    date: new Date(2022, 1, 13),
    name: 'Amazon',
    amount: -27.99,
    category: 'Abonnement'
  },
  {
    date: new Date(2022, 1, 10),
    name: 'Edeka',
    amount: -168,
    category: 'Abonnement'
  },
  {
    date: new Date(2022, 1, 3),
    name: 'Netflix',
    amount: -4.99,
    category: 'Abonnement'
  },
  {
    date: new Date(2022, 1, 2),
    name: 'Berufsunfähigkeitsversicherung',
    amount: -60,
    category: 'Versicherung'
  },
  {
    date: new Date(2022, 1, 2),
    name: 'Spotify',
    amount: -4.99,
    category: 'Abonnement'
  },
  {
    date: new Date(2022, 1, 2),
    name: 'Strom',
    amount: -70,
    category: 'Abonnement'
  },
  {
    date: new Date(2022, 1, 2),
    name: 'Miete',
    amount: -600,
    category: 'Abonnement'
  },
  {
    date: new Date(2022, 1, 1),
    name: 'Gehalt DiMaSi GmbH',
    amount: 2500,
    category: 'Gehalt'
  },
]