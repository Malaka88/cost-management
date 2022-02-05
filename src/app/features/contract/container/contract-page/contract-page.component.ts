import { Component, OnInit } from '@angular/core';
import { Contract } from 'src/app/models/contract-model';

@Component({
  selector: 'app-contract-page',
  templateUrl: './contract-page.component.html',
  styleUrls: ['./contract-page.component.css']
})
export class ContractPageComponent implements OnInit {

  public contracts: Contract[] = [
    {
      name: 'Berufsunfähigkeitsversicherung',
      category: 'Versicherung',
      cost: 50,
      description: '',
      provider: 'AXA'
    },
    {
      name: 'Hausratsversicherung',
      category: 'Versicherung',
      cost: 5,
      description: '',
      provider: 'AXA'
    },
    {
      name: 'Haftpflichtversicherung',
      category: 'Versicherung',
      cost: 8,
      description: '',
      provider: 'AXA'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
