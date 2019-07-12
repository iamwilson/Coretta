// core
import { combineReducers } from 'redux';

// reducers
import loadingResponse from './loading/loadingReducer';

export const rootReducer = combineReducers({
    loadingResponse,
});
