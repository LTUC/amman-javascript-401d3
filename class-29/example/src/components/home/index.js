import React from 'react';
import superagent from 'superagent';
import Card from './card';

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0,
      results: [],
    }
  }

  componentDidMount() {
    this.handleData();
  }

  handleData = async () => {
    let data = await superagent.get('https://swapi.co/api/people/?format=json');
    console.log(data);
    this.setState({ count: data.body.count, results: data.body.results });
  }

  render() {
    return (
      <ul>
        {this.state.results.map(item => {
          return <Card person={item} />
        })}
      </ul>
    )
  }
}

export default Home;
