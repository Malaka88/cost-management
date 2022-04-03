export interface Contract {
    nameAndCost : string,
    name: string,
    cost: number,
    description: string,
    category: string,
    provider: string,
    uuidValue: string;
    dialogAction: string;
    contract_number: string;
    start_date: string;
    end_date: string;
    cancellation_date: string;
    withdrawal_date: number;
    period_number: number;
    period_name: string;
}