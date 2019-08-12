// misc
import * as types from '../../constants/actionTypes';
import { IActionModel } from '../../models/actionModel';
import { initialState } from '../initialState';

const loadingReducer = (state = initialState.loadingResponse, action: IActionModel) => {
    switch (action.type) {
        case types.BEGIN_API_CALL: return ++state;
        case types.END_API_CALL: return --state;
        default: return state;
    }
};

export default loadingReducer;
