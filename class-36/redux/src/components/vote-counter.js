import React from 'react';
import { connect } from 'react-redux';

import { increment, reset } from '../store/votes.js';


const VotesCounter = props => {

    return (
        <section className="counter">
            <ul>
                {props.counter.candidates.map( person=> 
                    <li onClick={()=> props.increment(person.name)} key={person.name}> {person.name}: {person.votes}</li>
                )}
            </ul>
            <button onClick={props.reset}>Reset</button>
        </section>
    )

}

const mapStateToProps = state => ({
    counter: state.counter
});

const mapDispatchToProps = {increment, reset};

// const mapDispatchToProps = ({
//     increment: dispatch(increment()),
//     reset: dispatch(reset())
// })

// instead of exporting the component we export it after it's been connected the redux store
export default connect(mapStateToProps, mapDispatchToProps)(VotesCounter);