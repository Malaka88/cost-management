import { Component, ViewChild } from "@angular/core";
import { ApexLegend, ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";
import { CustomCardModel } from 'src/app/models/custom-card-model';

@Component({
  selector: 'app-fixed-cost-page',
  templateUrl: './fixed-cost-page.component.html',
  styleUrls: ['./fixed-cost-page.component.css']
})
export class FixedCostPageComponent {
  @ViewChild("chart") chart: ChartComponent;
  series: ApexNonAxisChartSeries = [910, 55, 34.97];
  seriesDetail = [800, 40, 70, 12.99, 9.99, 11.99, 50, 5]
  labels = ["Haushalt", "Versicherung", "Abonnement"];
  labelsDetail = ['Miete', 'Internet', 'Strom', 'Netflix', 'Spotify', 'Disney +', 'Hausratsversicherung', 'Berufsunfähigkeitsversicherung'];
  chartPie: ApexChart = {
    width: 600,
    type: "pie"
  };
  responsive: ApexResponsive[] = [{
    breakpoint: undefined,
    options: {},
  }];
  
  legend: ApexLegend = {
    show: true,
    position: "bottom",
    // offsetY: 100
  }

  householdCards: CustomCardModel[] = [
    {
      title: 'Miete',
      amount: 800,
      iconPath: '../../assets/img/haus-icon.jpg'
    },
    {
      title: 'Internet',
      amount: 40,
      iconPath: '../../assets/img/wifi-icon.jpg'
    },
    {
      title: 'Strom',
      amount: 70,
      iconPath: '../../assets/img/strom-icon.png'
    }
  ];

  aboCards: CustomCardModel[] = [
    {
      title: 'Netflix',
      amount: 12.99,
      iconPath: '../../assets/img/netflix-logo.jpg'
    },
    {
      title: 'Spotify',
      amount: 9.99,
      iconPath: '../../assets/img/spotify-logo.png'
    },
    {
      title: 'Disney +',
      amount: 11.99,
      iconPath: '../../assets/img/disney-logo.png'
    }
  ];

  insuranceCards: CustomCardModel[] = [
    {
      title: 'Berufsunfähigkeitsversicherung',
      amount: 50,
      iconPath: null
    },
    {
      title: 'Hausratsversicherung',
      amount: 5,
      iconPath: null
    },
  ];

}
