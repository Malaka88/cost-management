import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Abo } from 'src/app/models/abo-model';
import { Contract } from 'src/app/models/contract-model';
import * as uuid from 'uuid';
import { AboDialogComponent } from '../abo-dialog/abo-dialog.component';
import { ContractDialogComponent } from '../contract-dialog/contract-dialog.component';

@Component({
  selector: 'app-contract-page',
  templateUrl: './contract-page.component.html',
  styleUrls: ['./contract-page.component.css']
})
export class ContractPageComponent implements OnInit {

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.assignContractNameAndCost(true, this.emptyContract);
    this.assignAboNameAndCost(true, this.emptyAbo);
  }

  //Dummy Data for first contract entries
  public contracts: Contract[] = [
    {
      nameAndCost: '',
      name: 'Berufsunfähigkeitsversicherung',
      category: 'Versicherung',
      cost: 50,
      description: 'Wenn Arm ab',
      provider: 'Gothaer',
      uuidValue: uuid.v4(),
      dialogAction: 'none',
      contractNumber: '85237/0723',
      startDate: new Date(2022,3,2),
      endDate: new Date(2023,3,2),
      cancellationDate: new Date(2022,11,11),
      withdrawalDate: 19,
      periodNumber: 1,
      periodName: 'Monat',
      isTaxRelevant: false,
    },
    {
      nameAndCost: '',
      name: 'Hausratsversicherung',
      category: 'Versicherung',
      cost: 150,
      description: 'Wenn Haus kaputt',
      provider: 'AXA',
      uuidValue: uuid.v4(),
      dialogAction: 'none',
      contractNumber: 'AGZ1456/4562',
      startDate: new Date(2022,1,17),
      endDate: new Date(2023,1,17),
      cancellationDate: new Date(2022,1,9),
      withdrawalDate: 19,
      periodNumber: 1,
      periodName: 'Jahr',
      isTaxRelevant: false,
    },
    {
      nameAndCost: '',
      name: 'Haftpflichtversicherung',
      category: 'Versicherung',
      cost: 16,
      description: 'Wenn fremdes Fenster kaputt',
      provider: 'AXA',
      uuidValue: uuid.v4(),
      dialogAction: 'none',
      contractNumber: '58564142458',
      startDate: new Date(2022,4,1),
      endDate: new Date(2023,4,1),
      cancellationDate: new Date(2023,1,1),
      withdrawalDate: 19,
      periodNumber: 3,
      periodName: 'Monat',
      isTaxRelevant: false,
    }
  ]

  //Dummy Data for first abo entries
  public abos: Abo[] = [
    {
      nameAndCost: '',
      name: 'Netflix',
      category: 'Video Streaming',
      cost: 24.99,
      description: 'Netflix & Chill',
      uuidValue: uuid.v4(),
      dialogAction: 'none',
      contractNumber: 'NX1337/4242',
      startDate: new Date(2022,2,3),
      endDate: new Date(2023,2,3),
      cancellationDate: new Date(2022,11,11),
      withdrawalDate: 19,
      periodNumber: 3,
      periodName: 'Monat',
      isTaxRelevant: false,
    },
    {
      nameAndCost: "",
      name: 'Spotify',
      category: 'Musik Streaming',
      cost: 4.99,
      description: 'Musik hören',
      uuidValue: uuid.v4(),
      dialogAction: 'none',
      contractNumber: 'ZDHDKALFASD',
      startDate: new Date(2022,4,3),
      endDate: new Date(2023,4,33),
      cancellationDate: new Date(2022,12,12),
      withdrawalDate: 12,
      periodNumber: 1,
      periodName: 'Monat',
      isTaxRelevant: false,
    },
    {
      nameAndCost: "",
      name: 'Entwickler Magazin',
      category: 'Zeitschrift',
      cost: 9.99,
      description: 'Fachzeitschrift für Software-Entiwckler',
      uuidValue: uuid.v4(),
      dialogAction: 'none',
      contractNumber: '1516843920',
      startDate: new Date(2022, 1, 1),
      endDate: new Date(2023, 1, 1),
      cancellationDate: new Date(2022, 10, 9),
      withdrawalDate: 3,
      periodNumber: 1,
      periodName: 'Monat',
      isTaxRelevant: true,
    }
  ]

  public emptyAbo: Abo = {
    nameAndCost: '',
    name: '',
    category: '',
    cost: 0,
    description: '',
    uuidValue: uuid.v4(),
    dialogAction: '',
    contractNumber: '',
    startDate: new Date(),
    endDate: new Date(),
    cancellationDate: new Date(),
    withdrawalDate: 0,
    periodNumber: 0,
    periodName: '',
    isTaxRelevant: false,
  }

  public emptyContract: Contract = {
    nameAndCost: '',
    name: '',
    category: 'Versicherung',
    cost: 0,
    description: '',
    provider: '',
    uuidValue: uuid.v4(),
    dialogAction: '',
    contractNumber: '',
    startDate: new Date(),
    endDate: new Date(),
    cancellationDate: new Date(),
    withdrawalDate: 0,
    periodNumber: 0,
    periodName: '',
    isTaxRelevant: false,
  }

  openContractDialog(contract: Contract, delBtnIsVisible: Boolean) {
    const dialogRef = this.dialog.open(ContractDialogComponent, {
      data: { contract: contract, btn: delBtnIsVisible }
    });
    dialogRef.afterClosed().subscribe(x => this.dialogContractAction(x));
  }

  openAboDialog(abo: Abo, delBtnIsVisible: Boolean) {
    const dialogRef = this.dialog.open(AboDialogComponent, {
      data: { abo: abo, btn: delBtnIsVisible }
    });
    dialogRef.afterClosed().subscribe(x => this.dialogAboAction(x));
  }

  dialogContractAction(returnedContract: Contract) {
    if (returnedContract.dialogAction == 'delete') {
      //deletes entry
      const index = this.contracts.findIndex(x => x.uuidValue === returnedContract.uuidValue);
      this.contracts.splice(index, 1);
    } else if (returnedContract.dialogAction == 'new') {
      //adds new entry
      this.assignAboNameAndCost(false, returnedContract);
      this.contracts.push(returnedContract);
    } else if (returnedContract.dialogAction == 'update') {
      //updates changes
      this.assignAboNameAndCost(false, returnedContract);
    }
  }

  dialogAboAction(returnedAbo: Abo) {

    if (returnedAbo.dialogAction == 'delete') {
      //deletes entry
      const index = this.abos.findIndex(x => x.uuidValue === returnedAbo.uuidValue);
      this.abos.splice(index, 1);
    } else if (returnedAbo.dialogAction == 'new') {
      //adds new entry
      this.assignAboNameAndCost(false, returnedAbo);
      this.abos.push(returnedAbo);
    } else if (returnedAbo.dialogAction == 'update') {
      //updates changes
      this.assignAboNameAndCost(false, returnedAbo);
    }
  }

  private assignAboNameAndCost(onStart: Boolean, returnedAbo: Abo) {
    if (onStart) {
      this.abos.forEach(abo => {
        this.transformNameAndCost(abo);
      });
    } else {
      this.transformNameAndCost(returnedAbo);
    }
  }

  private assignContractNameAndCost(onStart: Boolean, returnedContract: Abo) {
    if (onStart) {
      this.contracts.forEach(contract => {
        this.transformNameAndCost(contract);
      });
    } else {
      this.transformNameAndCost(returnedContract);
    }
  }

  transformNameAndCost(contractOrAbo: any) {
    if (contractOrAbo.periodNumber == 1) {
      contractOrAbo.nameAndCost = `${contractOrAbo.name} mit ${contractOrAbo.cost} € pro ${contractOrAbo.periodName}`;
    } else {
      switch (contractOrAbo.periodName) {
        case "Woche": contractOrAbo.nameAndCost = `${contractOrAbo.name} mit ${contractOrAbo.cost} € alle ${contractOrAbo.periodNumber} Wochen`; break;
        case "Monat": contractOrAbo.nameAndCost = `${contractOrAbo.name} mit ${contractOrAbo.cost} € alle ${contractOrAbo.periodNumber} Monate`; break;
        case "Jahr": contractOrAbo.nameAndCost = `${contractOrAbo.name} mit ${contractOrAbo.cost} € alle ${contractOrAbo.periodNumber} Jahre`; break;
        default: null;
      }
    }
  }

}

