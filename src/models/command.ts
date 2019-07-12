export interface ICommand {
    id: string;
    transactionID: string;
    status: number;
    type: string;
    executionDate: Date;
    message: string;
}
