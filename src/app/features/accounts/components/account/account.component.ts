import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent{

  cards: CustomCard[] = [
    {
      title: 'Volksbank Karlsruhe',
      amount: 2323.44,
      imgPath: '../../../assets/img/vk-logo.jpg',
      route: 'vb-ka'
    },
    {
      title: 'Sparkasse Karlsruhe',
      amount: 525.87,
      imgPath: '../../../assets/img/sparkasse-logo.png',
      route: 'sk-ka'
    },
    {
      title: 'ING Einzelkonto',
      amount: 2912.23,
      imgPath: '../../../assets/img/ing-logo.jpeg',
      route: 'ing-ek'
    },
    {
      title: 'ING Gemeinschaftskonto',
      amount: 5234.23,
      imgPath: '../../../assets/img/ing-logo.jpeg',
      route: 'ing-gk'
    },
  ]
}

export interface CustomCard {
  title: string,
  imgPath: string,
  amount: number,
  route: string
}