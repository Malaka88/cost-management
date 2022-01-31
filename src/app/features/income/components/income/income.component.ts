import { Component } from '@angular/core';

export interface IncomeTableModel {
  incomeDate: string,
  incomeMoney: number,
  origin: string,
}

const ELEMENT_DATA: IncomeTableModel[] = [
  { incomeDate: 'Dezember, 2021', incomeMoney: 7324.22, origin: 'Bosch' },
  { incomeDate: 'November, 2021', incomeMoney: 7324.22, origin: 'Bosch' },
  { incomeDate: 'Oktober, 2021', incomeMoney: 7324.22, origin: 'Bosch' },
  { incomeDate: 'September, 2021', incomeMoney: 7324.22, origin: 'Bosch' },
  { incomeDate: 'August, 2021', incomeMoney: 7324.22, origin: 'Bosch' },
  { incomeDate: 'Juli, 2021', incomeMoney: 7324.22, origin: 'Bosch' },
  { incomeDate: 'Juni, 2021', incomeMoney: 7324.22, origin: 'Bosch' }
];

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent {

  displayedColumns: string[] = ['incomeDate', 'incomeMoney', 'origin'];
  dataSource = ELEMENT_DATA;
}
