import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assets-overview-page',
  templateUrl: './assets-overview-page.component.html',
  styleUrls: ['./assets-overview-page.component.css']
})
export class AssetsOverviewPageComponent implements OnInit {
  saleData = [
    { name: "Mobiles", value: 105000 },
    { name: "Laptop", value: 55000 },
    { name: "AC", value: 15000 },
    { name: "Headset", value: 150000 },
    { name: "Fridge", value: 20000 }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
