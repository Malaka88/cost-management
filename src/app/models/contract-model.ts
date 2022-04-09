export interface Contract {
    nameAndCost : string,
    name: string,
    cost: number,
    description: string,
    category: string,
    provider: string,
    uuidValue: string;
    dialogAction: string;
    contractNumber: string;
    startDate: Date;
    endDate: Date;
    cancellationDate: Date;
    withdrawalDate: number;
    periodNumber: number;
    periodName: string;
    isTaxRelevant: Boolean;
}