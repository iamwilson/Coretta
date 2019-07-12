// core
import axios, { AxiosPromise } from 'axios';
import { config } from '../../configs/config';

// constants
const baseUrl = config.domain + '/api';

export const getTransactionList = (cancellor?: any): AxiosPromise<any> => {
    const url = baseUrl + '/client/Transaction/count/' + config.rowCount;

    return axios.get(url, {
        cancelToken: new axios.CancelToken(function executor(c) {
            if (cancellor) {
                cancellor(c);
            }
        })
    });
};

export const getTransactionInfo = (id: string, cancellor?: any): AxiosPromise<any> => {
    const url = baseUrl + '/client/Transaction/Details/transactionId=' + id;

    return axios.get(url, {
        cancelToken: new axios.CancelToken(function executor(c) {
            if (cancellor) {
                cancellor(c);
            }
        })
    });
};

export const closeTransaction = (id: string, cancellor?: any): AxiosPromise<any> => {
    const url = baseUrl + '/client/Transaction/close';

    return axios.post(url, { transactionId: id }, {
        cancelToken: new axios.CancelToken(function executor(c) {
            if (cancellor) {
                cancellor(c);
            }
        })
    });
};

export const continueTransaction = (id: any, payload: any, cancellor?: any): AxiosPromise<any> => {
    const url = baseUrl + '/client/Transaction/continue';

    return axios.post(url, { context: payload, transactionId: id }, {
        cancelToken: new axios.CancelToken(function executor(c) {
            if (cancellor) {
                cancellor(c);
            }
        })
    });
};

export const restartTransaction = (id: any, cancellor?: any): AxiosPromise<any> => {
    const url = baseUrl + '/client/Transaction/restart';

    return axios.post(url, { transactionId: id }, {
        cancelToken: new axios.CancelToken(function executor(c) {
            if (cancellor) {
                cancellor(c);
            }
        })
    });
};
