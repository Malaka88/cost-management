import { Component } from '@angular/core';
import { CustomCardModel } from 'src/app/models/custom-card-model';

@Component({
  selector: 'app-fixed-cost-page',
  templateUrl: './fixed-cost-page.component.html',
  styleUrls: ['./fixed-cost-page.component.css']
})
export class FixedCostPageComponent {

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
