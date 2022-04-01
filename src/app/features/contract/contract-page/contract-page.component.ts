import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Abo } from 'src/app/models/abo-model';
import { Contract, ContractWithNote } from 'src/app/models/contract-model';
import * as uuid from 'uuid';

import { AboDialogComponent } from '../abo-dialog/abo-dialog.component';
import { ContractDialogComponent } from '../contract-dialog/contract-dialog.component';
import { NewAboDialogComponent } from '../new-abo-dialog/new-abo-dialog.component';
import { NewContractDialogComponent } from '../new-contract-dialog/new-contract-dialog.component';

@Component({
  selector: 'app-contract-page',
  templateUrl: './contract-page.component.html',
  styleUrls: ['./contract-page.component.css']
})
export class ContractPageComponent implements OnInit {
  public contractsWithNote: ContractWithNote[] = [];

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.assignNoteToContract();
  }

  public contracts: Contract[] = [
    {
      name: 'Berufsunfähigkeitsversicherung',
      category: 'Versicherung',
      cost: 50,
      description: 'Wenn Arm ab',
      provider: 'AXA',
      uuidValue: uuid.v4(),
      dialogAction: 'none',
      contract_number: '85237/0723',
      start_date: '02.03.2022',
      end_date: '02.03.2023',
      cancellation_date: '11.11.2022',
      withdrawal_date: 19,
      period_number: 2,
      period_name: 'Monat',
    },
    {
      name: 'Hausratsversicherung',
      category: 'Versicherung',
      cost: 5,
      description: 'Wenn Haus kaputt',
      provider: 'AXA',
      uuidValue: uuid.v4(),
      dialogAction: 'none',
      contract_number: 'AGZ1456/4562',
      start_date: '02.03.2022',
      end_date: '02.03.2023',
      cancellation_date: '11.11.2022',
      withdrawal_date: 19,
      period_number: 2,
      period_name: 'Monat',
    },
    {
      name: 'Haftpflichtversicherung',
      category: 'Versicherung',
      cost: 8,
      description: 'Wenn fremdes Fenster kaputt',
      provider: 'AXA',
      uuidValue: uuid.v4(),
      dialogAction: 'none',
      contract_number: '58564142458',
      start_date: '02.03.2022',
      end_date: '02.03.2023',
      cancellation_date: '11.11.2022',
      withdrawal_date: 19,
      period_number: 1,
      period_name: 'Monat',
    }
  ]

  public abos: Abo[] = [
    {
      name: 'Netflix',
      category: 'Video Straming',
      cost: 9.99,
      description: 'Netflix & Chill',
      uuidValue: uuid.v4(),
      dialogAction: 'none',
      contract_number: 'NX1337/4242',
      start_date: '02.03.2022',
      end_date: '02.03.2023',
      cancellation_date: '11.11.2022',
      withdrawal_date: 19,
      period_number: 2,
      period_name: 'Monat',
    },
    {
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
      name: 'Disney+',
      category: 'Video Straming',
      cost: 10.99,
      description: 'Überwiegend wegen Starwars zeugs',
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

  openContractDialog(contract: Contract) {
    var returnedContract: Contract;
    const dialogRef = this.dialog.open(ContractDialogComponent, {
      data: {
        contract: contract,
        action: 1
      }
    });
    // dialogRef.afterClosed().subscribe(x => this.contracts.pop());
    dialogRef.afterClosed().subscribe(x => this.dialogContractAction(x));
  }

  openDialogAddContract() {
    const dialogRef = this.dialog.open(NewContractDialogComponent);
    dialogRef.afterClosed().subscribe(x => this.dialogContractAction(x));
  }

  dialogContractAction(returnedContract: Contract) {

    if (returnedContract.dialogAction == 'delete') {
      console.log(this.contracts);
      const index = this.contracts.findIndex(x => x.uuidValue === returnedContract.uuidValue);
      this.contracts.splice(index, 1);
    }

    if (returnedContract.dialogAction == 'new') {
      console.log("new");
      console.log(returnedContract);
      this.contracts.push(returnedContract);
    }
  }

  openAboDialog(abo: Abo) {
    var returnedAbo: Abo;
    const dialogRef = this.dialog.open(AboDialogComponent, {
      data: abo,
    });
    // dialogRef.afterClosed().subscribe(x => this.contracts.pop());
    dialogRef.afterClosed().subscribe(x => this.dialogAboAction(x));
  }

  openDialogAddAbo() {
    const dialogRef = this.dialog.open(NewAboDialogComponent);
    dialogRef.afterClosed().subscribe(x => this.dialogAboAction(x));
  }

  dialogAboAction(returnedAbo: Abo) {
    if (returnedAbo.dialogAction == 'delete') {
      console.log(this.abos);
      const index = this.abos.findIndex(x => x.uuidValue === returnedAbo.uuidValue);
      this.abos.splice(index, 1);
    } else if (returnedAbo.dialogAction == 'new') {
      console.log("new");
      console.log(returnedAbo);
      this.abos.push(returnedAbo);
    }
  }

  private assignNoteToContract() {
    let text: string = '';
    this.contracts.forEach(c => {
      if (c.period_number == 1) {
        text = `${c.name} mit ${c.cost} € pro ${c.period_name}`;
      } else {
        switch (c.period_name) {
          case "Woche": text = `${c.name} mit ${c.cost} € alle ${c.period_number} Wochen`; break;
          case "Monat": text = `${c.name} mit ${c.cost} € alle ${c.period_number} Monate`; break;
          case "Jahr": text = `${c.name} mit ${c.cost} € alle ${c.period_number} Jahre`; break;
          default: null;
        }
      }
      let newModel: ContractWithNote = {
        contract: c,
        note: text
      };
      this.contractsWithNote.push(newModel);
    });
  }

}

