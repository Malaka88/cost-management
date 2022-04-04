export interface Abo {
    nameAndCost : string,
    name: string,
    cost: number,
    description: string,
    category: string,
    uuidValue: string;
    dialogAction: string;
    contract_number: string;
    start_date: Date;
    end_date: Date;
    cancellation_date : Date;
    withdrawal_date: number;
    period_number: number;
    period_name: string;
}