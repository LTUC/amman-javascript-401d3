import React from 'react';

// import componets 
import Form from './form.js';
import People from './people';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // key and value pairs
            count: 0,
            results: []
        };
    }

    // method to be passed to form
    handleForm = (count, results) => {
        this.setState({count, results});
        // {count: count , results:results}
    }

    render() {
        return (
            <>
                <Form custom="button text" handler={this.handleForm} />
                <People count={this.state.count} people={this.state.results} />
            </>
        )
    }

}

export default App;