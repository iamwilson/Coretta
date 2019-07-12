// misc
import { initialState } from '../initialState';
import * as types from '../../constants/actionTypes';

const loadingReducer = (state = initialState.loadingResponse, action: any) => {
    switch (action.type) {
        case types.BEGIN_API_CALL: return ++state;
        case types.END_API_CALL: return --state;
        default: return state;
    }
};

export default loadingReducer;
