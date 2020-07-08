import React from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';



const API = process.env.REACT_APP_API || 'https://class-34-auth.herokuapp.com';

export const LoginContext = React.createContext();

class LoginProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            login: this.login,
            logout: this.logout,
            user: {}
        }
    }

    login = async(username, password) => {

        try {
            const results = await fetch( `${API}/signin`, {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                headers: new Headers({
                    'Authorization': `Basic ${btoa(`${username}:${password}`)}`
                })
            });

            let res = await results.json();
            console.log("res: ", res);

            // validate the token from res
            this.validateToken(res.token);


        } catch(ex) {
            
        }
    }

    logout = () => {
        this.setLoginState(false, null, {});
    }

    validateToken = token => {

        try {
            console.log({token});
            let user = jwt.verify(token, process.env.REACT_APP_SECRET || 'supersecret');
            console.log("user: ",user);
            // update the login context to loggedin
            this.setLoginState(true, token, user);

        } catch (ex) {
             // on err update the login context to loggedout
            this.logout();
            console.log("token Validation error")
        }
    }
    
    setLoginState = (loggedIn, token, user) => {
        cookie.save('auth', token);
        this.setState({token, loggedIn, user});
    }

    componentDidMount() {
        const cookieToken = cookie.load('auth');
        const token = cookieToken || null;
        this.validateToken(token);
    }

    render() {
        return (
            <LoginContext.Provider value={this.state}>
                {this.props.children}
            </LoginContext.Provider>
        )
    }
}

export default LoginProvider;

