// configuration
import * as appSetting from '../../configs/config';

// models
import { HttpStatus } from '../../models/enumTypes';

export const getRequestList = (): Promise<any> => {
    const data = require('./data/request.json');
    return new Promise((resolve) => {
        resolveData(resolve, data, HttpStatus.Success, appSetting.config.delay);
    });
};

export const getTransactionList = (): Promise<any> => {
    const data = require('./data/transaction.json');
    return new Promise((resolve) => {
        resolveData(resolve, data, HttpStatus.Success, appSetting.config.delay);
    });
};

export const getTransactionInfo = (id: string): Promise<any> => {
    const transactions = require('./data/transaction.json');
    const commands = require('./data/commands.json');

    const a = transactions.find((x: { id: any }) => x.id === id);
    const b = commands.filter((x: { transactionId: any }) => x.transactionId === id);
    const c = { commands: b };

    const data = { ...a, ...c };

    return new Promise((resolve) => {
        resolveData(resolve, data, HttpStatus.Success, appSetting.config.delay);
    });
};

export const closeTransaction = (id: any): Promise<any> => {
    return new Promise((resolve) => {
        resolveData(resolve, id, HttpStatus.Success, appSetting.config.delay);
    });
};

export const continueTransaction = (id: any, payload: any): Promise<any> => {
    return new Promise((resolve) => {
        resolveData(resolve, payload, HttpStatus.Success, appSetting.config.delay);
    });
};

export const restartTransaction = (id: any): Promise<any> => {
    return new Promise((resolve) => {
        resolveData(resolve, id, HttpStatus.Success, appSetting.config.delay);
    });
};

export const resolveData = (resolve: any, data: any, status: number, timeOut?: number) => {
    return setTimeout(() => { resolve({ data: data, status: status }); }, timeOut);
};
