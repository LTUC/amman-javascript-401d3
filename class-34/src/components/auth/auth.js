import React from 'react';
import { LoginContext } from './context';
import Show from '../show/show';

class Auth extends React.Component {

    static contextType = LoginContext;

    render() {
        let okToRender = false;

        try {
            okToRender = this.context.loggedIn && (
                this.props.capability ? 
                    this.context.user.capabilities.includes(this.props.capability)
                    : true
            )
            console.log("okToRender: ",okToRender)
        } catch (e) {
            console.warn('Not Authorized!');
        }

        // admin ['edit', 'delete', 'create']
        //     <Auth capabilty="delete">
        //             <button>delete for admins only</button>
        //     </Auth>

        return (
            <Show condition={okToRender}>
                {this.props.children}
            </Show>
        )
    }
}

export default Auth;

// 1- is the user logged in ?
// <Auth>
//     <div>example</div>
// </Auth>

// not just logged in but also I have a certain capability 
// 2- am I logged in and I have capabiltiy?
//  <Auth capabality="delete">
//     <div>example 2 </div>
// </Auth>

