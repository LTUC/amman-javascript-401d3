import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/header';
import Routes from './components/routes';
import Footer from './components/footer';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Routes />
        <Footer text="Class 29" />
      </BrowserRouter>
    )
  }
}

export default App;
