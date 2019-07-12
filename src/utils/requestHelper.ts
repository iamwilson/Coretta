
// misc
import { IRequest } from './../models/request';
import { RequestStatus } from '../models/enumTypes';
import * as datetimeHelper from './dateHelper';

export const requestMapper = (array: Array<IRequest>) => {
    const a = array.map((item: any) => {

        item.executionStartTime = datetimeHelper.formatDate(item.executionStartTime);
        item.scheduleTime = datetimeHelper.formatDate(item.scheduleTime);

        switch (item.status) {
            case RequestStatus.Pending:
                return { ...item, status: 'Pending' };
            case RequestStatus.Processing:
                return { ...item, status: 'Processing' };
            case RequestStatus.Succeeded:
                return { ...item, status: 'Succeeded' };
            case RequestStatus.Failed:
                return { ...item, status: 'Failed' };
            case RequestStatus.Queued:
                return { ...item, status: 'Queued' };
            default:
                return { ...item, status: 'Scheduled' };
        }
    });

    const b = a.map((item: any) => {
        switch (item.isRecurring) {
            case 0:
                return { ...item, isRecurring: 'No' };
            case 1:
                return { ...item, isRecurring: 'Yes' };
            default:
                return { ...item, isRecurring: 'Others' };
        }
    });

    return b;

};
