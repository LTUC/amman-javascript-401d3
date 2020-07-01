import React from 'react';
import ReactDOM from 'react-dom';

import { Link, NavLink } from 'react-router-dom';

const Header = props => {
    return (
        <header>
            <h1>Routing!</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <NavLink to="/stuff" activeClassName="here">Stuff</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;

