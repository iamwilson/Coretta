// misc
import moment from 'moment';
import { config } from '../configs/config';

export const formatDate = (datetime: any, dateFormat = config.dateFormat) => {
    if (datetime != null) {
        return moment(new Date(datetime)).format(dateFormat);
    }
};
