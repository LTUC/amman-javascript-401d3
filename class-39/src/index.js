import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

// best practice to add provider on the index.js level
function Main() {
    return <App />
}

const root = document.getElementById("root");
ReactDOM.render(<Main />, root);
