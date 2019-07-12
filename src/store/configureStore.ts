// core
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';

// misc
import { rootReducer } from '../reducers/rootReducer';

export const configureStore = () => {
    const store = createStore(rootReducer, applyMiddleware(thunk));

    return store;
};
