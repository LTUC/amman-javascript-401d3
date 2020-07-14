import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducers';

// you do not need ot build your thunk - npm i redux-thunk
import thunk from './middleware/thunk';


let reducers = combineReducers({
    data: reducer
});

const store = () => {
    return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}

export default store();