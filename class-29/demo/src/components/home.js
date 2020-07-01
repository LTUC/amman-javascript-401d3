import React from 'react';
import ReactDOM from 'react-dom';

import { IfRenderer, Then, Else } from '../components/if/index.js';
import Modal from '../components/modal/modal.js';

class HomePage extends React.Component {
    // I have a modal, if the modal is closed:
    // I wanna have here a button and when we click it
    // we will open a modal
    // if the modal is open it should be rendered

    // add state, open : false/true
    constructor(props) {
        super(props);
        this.state = {open: false};
    }
    
    toggleModal = () => {
        this.setState({open: !this.state.open});
    }

    render() {
        return (
            <section>
                <IfRenderer condition={this.state.open} >
                    <Then>
                        <Modal title="My Modal Title" close={this.toggleModal}>
                            <div>
                                this is my modal content!!! 
                            </div>
                        </Modal>
                    </Then>
                    <Else>
                        <button onClick={this.toggleModal}>Open Modal</button>
                    </Else>
                </IfRenderer>
            </section>
        )

    }

}

export default HomePage;