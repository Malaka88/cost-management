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

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent {
  @ViewChild("chart") chart: ChartComponent;
  series: ApexNonAxisChartSeries = [2500, 1000, 500];
  labels = ["Einkommen", "Fixe Ausgaben", "Variable Ausgaben"];
  chartPie: ApexChart = {
    width: 600,
    type: "pie"
  };

  legend: ApexLegend = {
    show: true,
    position: "bottom",
    // offsetX: -100
  }
}
