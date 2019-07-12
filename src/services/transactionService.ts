// configuration
import * as appSetting from '../configs/config';

// services
import * as api from './generated/transactionService';
import * as mockService from './mock/mockService';

export const getTransactionList = () => {
    switch (appSetting.config.mode) {
        case appSetting.ONLINE: { return api.getTransactionList(); }
        case appSetting.OFFLINE: { return mockService.getTransactionList(); }
        default: { return api.getTransactionList(); }
    }
};

export const getTransactionInfo = (id: string) => {
    switch (appSetting.config.mode) {
        case appSetting.ONLINE: { return api.getTransactionInfo(id); }
        case appSetting.OFFLINE: { return mockService.getTransactionInfo(id); }
        default: { return api.getTransactionInfo(id); }
    }
};

export const closeTransaction = (id: string) => {
    switch (appSetting.config.mode) {
        case appSetting.ONLINE: { return api.closeTransaction(id); }
        case appSetting.OFFLINE: { return mockService.closeTransaction(id); }
        default: { return api.closeTransaction(id); }
    }
};

export const continueTransaction = (id: any, payload: any) => {
    switch (appSetting.config.mode) {
        case appSetting.ONLINE: { return api.continueTransaction(id, payload); }
        case appSetting.OFFLINE: { return mockService.continueTransaction(id, payload); }
        default: { return api.continueTransaction(id, payload); }
    }
};

export const restartTransaction = (id: any) => {
    switch (appSetting.config.mode) {
        case appSetting.ONLINE: { return api.restartTransaction(id); }
        case appSetting.OFFLINE: { return mockService.restartTransaction(id); }
        default: { return api.restartTransaction(id); }
    }
};
