import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './app';
import store from './store/';

function Entry() {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

const rootElement = document.getElementById('insert');
ReactDOM.render(<Entry />, rootElement);
