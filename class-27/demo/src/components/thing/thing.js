import React from 'react';
import './thing.scss';

class Thing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {stuff: true};
    }

    handlerClick = (e) => {
        this.setState({stuff: !this.state.stuff});
        console.log("this.state.stuff ===> ", this.state.stuff)
    }

    render() {
        return (
            <section>
                <span>Stuff: {this.state.stuff.toString()}</span>
                <button onClick={this.handlerClick}>Click</button>
            </section>
        )
    }
}

export default Thing;