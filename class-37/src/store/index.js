import { createStore, combineReducers } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import candidates from './candidates.js';
import votes from './votes.js';

let rootReducer = combineReducers({ candidates, votes });

const store = () => {
    return createStore(rootReducer, composeWithDevTools());
}

// const store = () => createStore(rootReducer, composeWithDevTools());


export default store();