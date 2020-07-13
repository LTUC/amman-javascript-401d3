import React from 'react';
import { increment, reset, disable } from '../store/candidates';

import { connect } from 'react-redux';


const VotesCounter = props => {

    return (
        <section className="counter">
            <table>
                <thead>
                    <tr>
                        <th>Candidate</th>
                        <th>Votes</th>
                        <th>PCT</th>
                    </tr>
                </thead>
                <tbody>
                    {props.candidates.map( person =>
                        <tr  
                            className={person.disabled ? 'disabled': ''}
                            onClick={()=> person.disabled ? {} : props.increment(person) }
                            onDoubleClick={()=> props.disable(person)}
                            key={person.name}>
                            <td>{person.name}</td>
                            <td>{person.votes}</td>
                            <td>{person.votes ? ((person.votes / props.votes.totalVotes) * 100 ).toFixed(2) + '%' : '0%' }</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <button onClick={props.reset}>Reset</button>
        </section>

    )
}




const mapStateToProps = state => ({
    candidates: state.candidates,
    votes: state.votes
})

// we have actions so we should use this
const mapDispatchToProps = { increment, disable, reset };

/* you may see it in this way 
const mapDispatchProps = ({
    increment: dispatch(increment()),
    disable: dispatch(disable()),
    reset: dispatch(reset()),
});
*/

// instead of exporting our component we are exporting it after the connection
export default connect(mapStateToProps, mapDispatchToProps)(VotesCounter);