// misc
import { CommandStatus } from '../models/enumTypes';
import moment from 'moment';
import { config } from '../../src/configs/config';

export const commandMapper = (array: Array<any>) => {
    return array.map((item: any) => {

        item.executionDate = moment(new Date(item.executionDate)).format(config.dateFormat);

        switch (item.status) {
            case CommandStatus.Pending:
                return { ...item, status: 'Pending' };
            case CommandStatus.Succeeded:
                return { ...item, status: 'Succeeded' };
            case CommandStatus.Failed:
                return { ...item, status: 'Failed' };
            default:
                return { ...item, status: 'Investigation' };
        }
    });
};
