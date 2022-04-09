export interface Abo {
    nameAndCost : string,
    name: string,
    cost: number,
    description: string,
    category: string,
    uuidValue: string;
    dialogAction: string;
    contractNumber: string;
    startDate: Date;
    endDate: Date;
    cancellationDate : Date;
    withdrawalDate: number;
    periodNumber: number;
    periodName: string;
    isTaxRelevant: Boolean;
}