export class Transaction {
    id: string;
    type: number;
    name: string;
    requestId: string;
    status: number;
    state: number;
    createDate: Date;
    context: string;
    commands: [];

    constructor() {
        this.context = '';
    }
}
