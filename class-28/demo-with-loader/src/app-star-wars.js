import React from 'react';

import Form from './form.js';
import People from './people.js';

import './styles.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      count: 0,
      results: [],
    };
  }

  toggleLoading = () => {
    console.log("this.state.loading: ",this.state.loading)
    this.setState({ loading: !this.state.loading })
  }
  handleForm = (count, results) => {
    this.setState({ count, results });
  };

  render() {
    return (
      <>
        <Form prompt="Get Star Wars" toggleLoading={this.toggleLoading} handler={this.handleForm} />
        <People loading={this.state.loading} people={this.state.results} />
      </>
    );
  }
}

export default App;
