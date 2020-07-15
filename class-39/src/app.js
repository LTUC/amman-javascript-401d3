import React from 'react';
import People from './components/people';
import { Provider } from 'react-redux';

import store from './store/';

// I am adding provider here as another option, but best practice to add it on index.js

export default props => {
    return (
        <Provider store={store}>
            <People />
        </Provider>
    )
}