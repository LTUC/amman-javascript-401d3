import React from 'react';
import './style.scss';

const Header = () => {
    return (
        <header>
            <h1>New header</h1>
        </header>
    )
};

const Footer = () => <footer>&copy;2020 footer</footer>;

// Main 
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            words: 'initial State'
        }
    }

    handleClick = e => {
        e.preventDefault();
        let words = this.state.words.split('').reverse().join('');
        this.setState({words}); // re-render 
    }

    handleWord = e => {
        let words = e.target.value;
        this.setState({words}); // re-render 
    }

    render() {
        return (
            <div>
                <h3>{this.state.words}</h3>
                <input onChange={this.handleWord} />
                <button onClick={this.handleClick}>Reverse</button>
            </div>
        )
    }
}

//class App
class App extends React.Component {
    render() {
        return (
            // I will add Header, Main, Footer
            <React.Fragment>
                <Header />
                <Main />
                <Footer />
            </React.Fragment>
        )
    }
}

export default App;

