import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-stock-price-diagram',
  templateUrl: './stock-price-diagram.component.html',
  styleUrls: ['./stock-price-diagram.component.css']
})
export class StockPriceDiagramComponent implements OnInit {
  @Input() stockName = '';
  stockNameControl = new FormControl('month_1');
  path = '';

  ngOnInit(): void {
    this.path = `../../../../assets/img/stocks/${this.stockName}_month_1.png`;
    this.stockNameControl.valueChanges.subscribe(x => this.path = `../../../../assets/img/stocks/${this.stockName}_${x}.png`)
  }

}
