import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { IncomeTableModel } from 'src/app/models';

import { CreateIncomeDialogComponent } from '../create-income-dialog/create-income-dialog.component';

@Component({
  selector: 'app-income-page',
  templateUrl: './income-page.component.html',
  styleUrls: ['./income-page.component.css']
})
export class IncomePageComponent implements OnInit {
  @ViewChild(MatTable) table!: MatTable<IncomeTableModel>;

  displayedColumns: string[] = ['incomeDate', 'incomeMoney', 'origin'];
  public income: IncomeTableModel[] = [
    { incomeDate: new Date(2022, 1, 1), incomeMoney: 8654.55, origin: 'Bosch' },
    { incomeDate: new Date(2021, 12, 1), incomeMoney: 7324.22, origin: 'Bosch' },
    { incomeDate: new Date(2021, 11, 1), incomeMoney: 7324.22, origin: 'Bosch' },
    { incomeDate: new Date(2021, 10, 1), incomeMoney: 7324.22, origin: 'Bosch' },
  ];
  dataSource: MatTableDataSource<IncomeTableModel> = new MatTableDataSource(this.income);
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(CreateIncomeDialogComponent)
      .afterClosed().subscribe(newIncome => {
        if (newIncome) {
          this.income.unshift(newIncome);
          this.dataSource.data = this.income;
        }
      });
  }
}
