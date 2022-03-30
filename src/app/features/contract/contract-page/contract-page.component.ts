import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Contract } from 'src/app/models/contract-model';
import { ContractDialogComponent } from '../contract-dialog/contract-dialog.component';

@Component({
  selector: 'app-contract-page',
  templateUrl: './contract-page.component.html',
  styleUrls: ['./contract-page.component.css']
})
export class ContractPageComponent {

  constructor(private dialog: MatDialog) {

  }
  public contracts: Contract[] = [
    {
      name: 'Berufsunfähigkeitsversicherung',
      category: 'Versicherung',
      cost: 50,
      description: 'Wenn Arm ab',
      provider: 'AXA'
    },
    {
      name: 'Hausratsversicherung',
      category: 'Versicherung',
      cost: 5,
      description: 'Wenn Haus kaputt',
      provider: 'AXA'
    },
    {
      name: 'Haftpflichtversicherung',
      category: 'Versicherung',
      cost: 8,
      description: 'Wenn fremdes Fenster kaputt',
      provider: 'AXA'
    }
  ]

  openDialog(contract: Contract) {
    const dialogRef = this.dialog.open(ContractDialogComponent, {
      data: contract
    });
    dialogRef.afterClosed().subscribe(x => this.contracts.push(x));
  }
}
