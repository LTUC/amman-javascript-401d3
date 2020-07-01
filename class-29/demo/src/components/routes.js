import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import Home from './home.js';
import List from '../components/list/list.js';

const Routes = props => {

    let stuff = ['item1', 'item2', 'item3', 'item4', 'item5'];
    let items = stuff.map((item, i)=> <li key={i}>{item}</li> )

    return (
        <main>
            <Route path="/" exact>
                <Home />
            </Route> 
            <Route path="/stuff" exact render={() => <List>{items}</List>} />
        </main>
    )
}


export default Routes;
