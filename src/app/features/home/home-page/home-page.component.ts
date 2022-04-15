import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexLegend
} from "ng-apexcharts";
import { MatTableDataSource } from '@angular/material/table';
import { BookingModel } from 'src/app/models/booking-model';
import * as uuid from 'uuid';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent {
  displayedColumns: string[] = ['date', 'amount', 'name', 'account'];
  dataSource = new MatTableDataSource<BookingModel>();

  legend: ApexLegend = {
    show: true,
    position: "bottom",
    // offsetX: -100
  }


  @ViewChild("chart") chart: ChartComponent;
  series: ApexNonAxisChartSeries = [900, 1200, 350];
  labels = ["Überschüss: 900", "Fixe Ausgaben: 1200", "Variable Ausgaben: 350"];
  chartPie: ApexChart = {
    width: 600,
    type: "pie"
  };

  ngOnInit(): void {
    this.dataSource.data = bookingData;
  }

}

const bookingData: BookingModel[] = [
  {
    date: new Date(2022, 3, 17),
    name: 'Edeka',
    amount: -12.49,
    category: 'Abonnement',
    isTaxRelevant: false,
    uuidValue: uuid.v4(),
    dialogAction: 'none',
    transactionAccount: 'DE72560301010211254724',
    myAccount: 'DE92603004700125821366',
    periodName: 'einmalig',
    periodNumber: 1,
    isFixCost: false,
    turnus: '',
  },
  {
    date: new Date(2022, 3, 16),
    name: 'Paypal',
    amount: -4.99,
    category: 'Abonnement',
    isTaxRelevant: false,
    uuidValue: uuid.v4(),
    dialogAction: 'none',
    transactionAccount: 'DE52660301010210254789',
    myAccount: 'DE11522103600253841898',
    periodName: 'einmalig',
    periodNumber: 1,
    isFixCost: false,
    turnus: '',
  },
  {
    date: new Date(2022, 3, 13),
    name: 'Amazon',
    amount: -27.99,
    category: 'Einkauf',
    isTaxRelevant: false,
    uuidValue: uuid.v4(),
    dialogAction: 'none',
    transactionAccount: 'DE42663500311457824781',
    myAccount: 'DE37455120360102113574',
    periodName: 'einmalig',
    periodNumber: 1,
    isFixCost: false,
    turnus: '',
  },
  {
    date: new Date(2022, 3, 10),
    name: 'Edeka',
    amount: -168,
    category: 'Abonnement',
    isTaxRelevant: false,
    uuidValue: uuid.v4(),
    dialogAction: 'none',
    transactionAccount: 'DE52614003600145782478',
    myAccount: 'DE11522103600253841898',
    periodName: 'einmalig',
    periodNumber: 1,
    isFixCost: false,
    turnus: '',
  },
  {
    date: new Date(2022, 3, 3),
    name: 'Netflix',
    amount: -4.99,
    category: 'Abonnement',
    isTaxRelevant: false,
    uuidValue: uuid.v4(),
    dialogAction: 'none',
    transactionAccount: 'DE72560301010212547248',
    myAccount: 'DE37455120360102113574',
    periodName: 'Monat',
    periodNumber: 1,
    isFixCost: true,
    turnus: '',
  },
  {
    date: new Date(2022, 3, 2),
    name: 'Berufsunfähigkeitsversicherung',
    amount: -60,
    category: 'Versicherung',
    isTaxRelevant: false,
    uuidValue: uuid.v4(),
    dialogAction: 'none',
    transactionAccount: 'DE42663500360014572511',
    myAccount: 'DE11522103600253841898',
    periodName: 'Monat',
    periodNumber: 1,
    isFixCost: true,
    turnus: '',
  },
  {
    date: new Date(2022, 3, 2),
    name: 'Spotify',
    amount: -14.99,
    category: 'Abonnement',
    isTaxRelevant: false,
    uuidValue: uuid.v4(),
    dialogAction: 'none',
    transactionAccount: 'DE42663500360014572511',
    myAccount: 'DE92603004700125821366',
    periodName: 'Monat',
    periodNumber: 3,
    isFixCost: true,
    turnus: '',
  },
  {
    date: new Date(2022, 3, 2),
    name: 'Strom',
    amount: -70,
    category: 'Abonnement',
    isTaxRelevant: false,
    uuidValue: uuid.v4(),
    dialogAction: 'none',
    transactionAccount: 'DE52614003600145782478',
    myAccount: 'DE11522103600253841898',
    periodName: 'Monat',
    periodNumber: 1,
    isFixCost: true,
    turnus: '',
  },
  {
    date: new Date(2022, 3, 2),
    name: 'Miete',
    amount: -600,
    category: 'Miete',
    isTaxRelevant: false,
    uuidValue: uuid.v4(),
    dialogAction: 'none',
    transactionAccount: 'DE92603004700125821366',
    myAccount: 'DE37455120360102113574',
    periodName: 'Monat',
    periodNumber: 1,
    isFixCost: true,
    turnus: '',
  },
]