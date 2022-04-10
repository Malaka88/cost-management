import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { StockModel } from 'src/app/models/stock-model';
import { TaxRelevantDataModel } from 'src/app/models/tax-relevant-data-model';

@Component({
  selector: 'app-assets-overview-page',
  templateUrl: './assets-overview-page.component.html',
  styleUrls: ['./assets-overview-page.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AssetsOverviewPageComponent {
  dataSource = stockData;
  columnsToDisplay = ['name', 'amount', 'value', 'performanceDay', 'performanceAllTime'];
  expandedElement: TaxRelevantDataModel | null;
}

const stockData: StockModel[] = [
  {
  name: 'Amazon',
  isbn: 'string',
  symbol: 'TSLA',
  amount: 2,
  value: 3000,
  performanceDay: 3,
  performanceAllTime: 200,
},
{
  name: 'Microsoft',
  isbn: 'string',
  symbol: 'TSLA',
  amount: 10,
  value: 250,
  performanceDay: -3,
  performanceAllTime: 200,
},
{
  name: 'SAP',
  isbn: 'string',
  symbol: 'TSLA',
  amount: 10,
  value: 100,
  performanceDay: 3,
  performanceAllTime: 50,
},
{
  name: 'Tesla',
  isbn: 'string',
  symbol: 'TSLA',
  amount: 10,
  value: 1000,
  performanceDay: 3,
  performanceAllTime: 200,
},
]
