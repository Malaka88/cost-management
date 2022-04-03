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
      contract_number: '85237/0723',
      start_date: '02.03.2022',
      end_date: '02.03.2023',
      cancellation_date: '11.11.2022',
      withdrawal_date: 19,
      period_number: 1,
      period_name: 'Monat',
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
      contract_number: 'AGZ1456/4562',
      start_date: '17.01.2022',
      end_date: '17.01.2023',
      cancellation_date: '01.09.2022',
      withdrawal_date: 19,
      period_number: 1,
      period_name: 'Jahr',
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
      contract_number: '58564142458',
      start_date: '01.04.2022',
      end_date: '01.04.2023',
      cancellation_date: '01.01.2023',
      withdrawal_date: 19,
      period_number: 3,
      period_name: 'Monat',
    }
  ]

  public abos: Abo[] = [
    {
      nameAndCost: '',
      name: 'Netflix',
      category: 'Video Streaming',
      cost: 24.99,
      description: 'Netflix & Chill',
      uuidValue: uuid.v4(),
      dialogAction: 'none',
      contract_number: 'NX1337/4242',
      start_date: '02.03.2022',
      end_date: '02.03.2023',
      cancellation_date: '11.11.2022',
      withdrawal_date: 19,
      period_number: 3,
      period_name: 'Monat',
    },
    {
      nameAndCost: "",
      name: 'Spotify',
      category: 'Musik Streaming',
      cost: 4.99,
      description: 'Musik hören',
      uuidValue: uuid.v4(),
      dialogAction: 'none',
      contract_number: 'ZDHDKALFASD',
      start_date: '04.03.2022',
      end_date: '04.03.2023',
      cancellation_date: '12.12.2022',
      withdrawal_date: 12,
      period_number: 1,
      period_name: 'Monat',
    },
    {
      nameAndCost: "",
      name: 'Entwickler Magazin',
      category: 'Zeitschrift',
      cost: 9.99,
      description: 'Fachzeitschrift für Software-Entiwckler',
      uuidValue: uuid.v4(),
      dialogAction: 'none',
      contract_number: '1516843920',
      start_date: '01.01.2022',
      end_date: '01.01.2023',
      cancellation_date: '10.09.2022',
      withdrawal_date: 3,
      period_number: 1,
      period_name: 'Monat',
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
    contract_number: '',
    start_date: '',
    end_date: '',
    cancellation_date: '',
    withdrawal_date: 0,
    period_number: 0,
    period_name: '',
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
    contract_number: '',
    start_date: '',
    end_date: '',
    cancellation_date: '',
    withdrawal_date: 0,
    period_number: 0,
    period_name: '',
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
    console.log(returnedContract.dialogAction);
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
    if (contractOrAbo.period_number == 1) {
      contractOrAbo.nameAndCost = `${contractOrAbo.name} mit ${contractOrAbo.cost} € pro ${contractOrAbo.period_name}`;
    } else {
      switch (contractOrAbo.period_name) {
        case "Woche": contractOrAbo.nameAndCost = `${contractOrAbo.name} mit ${contractOrAbo.cost} € alle ${contractOrAbo.period_number} Wochen`; break;
        case "Monat": contractOrAbo.nameAndCost = `${contractOrAbo.name} mit ${contractOrAbo.cost} € alle ${contractOrAbo.period_number} Monate`; break;
        case "Jahr": contractOrAbo.nameAndCost = `${contractOrAbo.name} mit ${contractOrAbo.cost} € alle ${contractOrAbo.period_number} Jahre`; break;
        default: null;
      }
    }
  }

}

