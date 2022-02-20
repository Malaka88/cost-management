import { Component } from '@angular/core';
import { CustomCardModel } from 'src/app/models/custom-card-model';

@Component({
  selector: 'app-fixed-cost-page',
  templateUrl: './fixed-cost-page.component.html',
  styleUrls: ['./fixed-cost-page.component.css']
})
export class FixedCostPageComponent {
  view: any[] = [700, 400];

  // options
  gradient: boolean = false;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  trimLabels = false;
  legendPosition: string = 'below';
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  single = [
    {
      "name": "Haushalt",
      "value": 910
    },
    {
      "name": "Versicherungen",
      "value": 55
    },
    {
      "name": "Abonnements",
      "value": 34.97
    },
  ];

  single2 = [
    {
      "name": "Miete",
      "value": 800
    },
    {
      "name": "Internet",
      "value": 40
    },
    {
      "name": "Strom",
      "value": 70
    },
    {
      "name": "Netflix",
      "value": 12.99
    },
    {
      "name": "Spotify",
      "value": 9.99
    },
    {
      "name": "Disney +",
      "value": 11.99
    },
    {
      "name": "Berufsunfähigkeitsversicherung",
      "value": 50
    },
    {
      "name": "Hausratsversicherung",
      "value": 5
    },
  ];
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
