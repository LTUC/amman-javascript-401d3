import React from 'react';
import { ThemeContext } from '../context/theme.js';

class Content extends React.Component {

  // when it's class component and we're using this class context
  // contextType is used to identify the context provider
  // we will have access to this.context to use any state or mehtod exposed from my context

  // this is one context only
  static contextType = ThemeContext;

  render() {
    return (
      <>
        <h2>Design Settings</h2>
        <button onClick={this.context.toggleMode}>{this.context.mode}</button>
      </>
    );
  }
}

export default Content;
