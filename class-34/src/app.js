import React from 'react';

import Auth from './components/auth/auth.js';
import Login from './components/auth/login.js';

import LoginContext from './components/auth/context.js';

const EditLink = props => {
    return (
        <Auth capability="dance">
            <span>Fake Update Link </span>
        </Auth>
    )
}


const ReadLink = props => {
    return (
        <Auth capability="read">
            <span>Welcome to our website! </span>
        </Auth>
    )
}

const DeleteLink = props => {
    return (
        <Auth capability="delete">
            <span>Fake Delete Link </span>
        </Auth>
    )
}

class App extends React.Component {
    render() {
        return (
            <LoginContext>
                <Login />
                <hr />
                <EditLink />
                <DeleteLink />
                <ReadLink />
            </LoginContext>
        )
    }
}

export default App;