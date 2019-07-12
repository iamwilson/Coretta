// core
import axios, { AxiosPromise } from 'axios';
import { config } from '../../configs/config';

const baseUrl = config.domain + '/api';

export const getRequestList = (cancellor?: any): AxiosPromise<any> => {
    const url = baseUrl + '/client/Request/count/' + config.rowCount;

    return axios.get(url, {
        cancelToken: new axios.CancelToken(function executor(c) {
            if (cancellor) {
                cancellor(c);
            }
        })
    });
};
