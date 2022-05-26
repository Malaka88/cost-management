import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { TaxRelevantDataModel } from 'src/app/models/tax-relevant-data-model';

@Component({
  selector: 'app-tax-relevant-data-page',
  templateUrl: './tax-relevant-data-page.component.html',
  styleUrls: ['./tax-relevant-data-page.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TaxRelevantDataPageComponent  {
  dataSource = taxData;
  dataSource2 = taxData2022;
  columnsToDisplay = ['name', 'date', 'amount', 'category'];
  expandedElement: TaxRelevantDataModel | null;
}

const taxData: TaxRelevantDataModel[] = [
  {
    name: 'Schreibtisch für Homeoffice',
    date: new Date(2021, 5, 16),
    account: 'Sparkasse',
    category: 'Anschaffung',
    amount: 648.99,
  },
  {
    name: 'Spende Wikipedia',
    date: new Date(2021, 5, 1),
    account: 'Sparkasse',
    category: 'Spende',
    amount: 100,
  },
  {
    name: 'Laserdrucker für Homeoffice',
    date: new Date(2021, 4, 30),
    account: 'Sparkasse',
    category: 'Anschaffung',
    amount: 164.99,
  },
  {
    name: 'Angular-Schulung',
    date: new Date(2021, 3, 17),
    account: 'Sparkasse',
    category: 'Weiterbildung',
    amount: 799.99,
  },
  {
    name: 'Dotnet-Schulung',
    date: new Date(2021, 2, 17),
    account: 'Sparkasse',
    category: 'Weiterbildung',
    amount: 599.99,
  },
]


const taxData2022: TaxRelevantDataModel[] = [
  {
    name: 'Bildschirm für Homeoffice',
    date: new Date(2022, 3, 16),
    account: 'Sparkasse',
    category: 'Anschaffung',
    amount: 648.99,
  },
  {
    name: 'Spende Wikipedia',
    date: new Date(2022, 2, 12),
    account: 'Sparkasse',
    category: 'Spende',
    amount: 100,
  },
  {
    name: 'Fachbuch SW Entwicklunng',
    date: new Date(2022, 1, 11),
    account: 'Sparkasse',
    category: 'Anschaffung',
    amount: 164.99,
  },
]