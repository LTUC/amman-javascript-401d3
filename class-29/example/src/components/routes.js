import React from 'react';
import { Route } from 'react-router-dom';

import Home from './home';

class Routes extends React.Component {
  render() {
    return (
      <>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/about-me"
          render={() => {
            return <h1>You've reached about me!</h1>
          }}
        />
      </>
    )
  }
}

export default Routes;
