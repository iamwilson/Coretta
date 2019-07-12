// core
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

// misc
import './favicon.ico';
import './styles/main.scss';
import App from './components/app';

// store
import { configureStore } from './store/configureStore';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>,
    document.getElementById('app')
);
