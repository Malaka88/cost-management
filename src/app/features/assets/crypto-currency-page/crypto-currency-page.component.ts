import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { StockModel } from 'src/app/models/stock-model';
import { TaxRelevantDataModel } from 'src/app/models/tax-relevant-data-model';

@Component({
  selector: 'app-crypto-currency-page',
  templateUrl: './crypto-currency-page.component.html',
  styleUrls: ['./crypto-currency-page.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class CryptoCurrencyPageComponent {
  dataSource = stockData;
  columnsToDisplay = ['name', 'amount', 'value', 'performanceDay', 'performanceAllTime'];
  expandedElement: TaxRelevantDataModel | null;
}

const stockData: StockModel[] = [
  {
    name: 'Bitcoin',
    isbn: 'string',
    symbol: 'BTC',
    amount: 0.5,
    value: 40000,
    performanceDay: 3,
    performanceAllTime: 200,
  },
  {
    name: 'Ethereum',
    isbn: 'string',
    symbol: 'TSLA',
    amount: 10,
    value: 250,
    performanceDay: -3,
    performanceAllTime: 200,
  },
  {
    name: 'Luna',
    isbn: 'string',
    symbol: 'TSLA',
    amount: 10,
    value: 100,
    performanceDay: 3,
    performanceAllTime: 50,
  },
  {
    name: 'Sandbox',
    isbn: 'string',
    symbol: 'TSLA',
    amount: 10,
    value: 1000,
    performanceDay: 3,
    performanceAllTime: 200,
  },
]
