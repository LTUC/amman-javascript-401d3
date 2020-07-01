import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link } from 'react-router-dom';

import Header from './header';
import Routes from './routes';
import Footer from './footer';

import '../styles.scss';

class App extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Routes />
                <Footer />
            </>
        )
    }
}

export default App;