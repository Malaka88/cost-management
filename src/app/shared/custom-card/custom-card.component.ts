import { Component, Input, OnInit } from '@angular/core';
import { CustomCardModel } from 'src/app/models/custom-card-model';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.css']
})
export class CustomCardComponent implements OnInit {
  @Input() customCard: CustomCardModel;
  title = '';
  amount = 0;
  iconPath = '../../assets/img/default.jpg';

  ngOnInit() {
    this.title = this.customCard.title;
    this.amount = this.customCard.amount;
    if (this.customCard.iconPath && this.customCard.iconPath.length > 0) {
      this.iconPath = this.customCard.iconPath;
    }
  }
}
