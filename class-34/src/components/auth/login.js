import React from 'react';

import { LoginContext } from './context.js';
import Show from '../show/show.js';


class Login extends React.Component {

    static contextType = LoginContext;
    
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    handleChange = e => {
        this.setState({ [e.target.name] : e.target.value});
    }

    handleSubmit = e => {
        e.preventDefault();
        this.context.login(this.state.username, this.state.password);
    }

    render() {
        console.log("this.context: ", this.context)
        return (
            <>
                <Show condition={this.context.loggedIn}>
                    <button onClick={this.context.logout}>Logout</button>
                </Show>
                <Show condition={!this.context.loggedIn}>
                    <form onSubmit={this.handleSubmit} >
                        <input 
                            placeholder="userName"
                            name="username"
                            onChange={this.handleChange}
                        />
                        <input
                            placeholder="password"
                            name="password"
                            onChange={this.handleChange}
                        />
                        <button>Login</button>
                    </form>
                </Show>
            </>
        )
    }

}

export default Login;