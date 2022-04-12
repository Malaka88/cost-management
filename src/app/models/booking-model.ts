export interface BookingModel {
    date: Date,
    name: string,
    amount: number
    category: string | null,
    isTaxRelevant: Boolean,
    uuidValue: String,
    dialogAction: String,
    transactionAccount: String,
    periodNumber: number,
    periodName: string,
    isFixCost: Boolean,
}