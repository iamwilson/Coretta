// misc
import { commandMapper } from './commandHelper';
import { TransactionStatus } from '../models/enumTypes';
import * as datetimeHelper from './dateHelper';

export const transactionMapper = (array: Array<any>) => {
    const a = array.map((item: any) => {

        if (item.commands) {
            item.commands = commandMapper(item.commands);
        }
        item.createDate = datetimeHelper.formatDate(item.createDate);

        switch (item.status) {
            case TransactionStatus.Pending:
                return { ...item, status: 'Pending' };
            case TransactionStatus.Processing:
                return { ...item, status: 'Processing' };
            case TransactionStatus.Succeeded:
                return { ...item, status: 'Succeeded' };
            case TransactionStatus.Failed:
                return { ...item, status: 'Failed' };
            default:
                return { ...item, status: 'Investigation' };
        }
    });

    return a;

};
