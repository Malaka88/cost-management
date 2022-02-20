import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent {

  @ViewChild("chart") chart: ChartComponent;
  // public chartOptions: Partial<ChartOptions>;
  series: ApexAxisChartSeries = [
    {
      name: "Ausgabe in Euro",
      data: [1500, 1300, 1000, 1500, 1700, 3000, 1300, 1300, 2000]
    }
  ];

  chartSeries: ApexChart = {
    height: 350,
    type: "bar"
  };
  title: ApexTitleSubtitle = { 
    text: "Ausgaben 2021"
  };

  xaxis: ApexXAxis = {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]
  }
  constructor() {
  }

  options = {
    series: [44, 55, 13, 33],
    labels: ['Apple', 'Mango', 'Orange', 'Watermelon']
  }
}
