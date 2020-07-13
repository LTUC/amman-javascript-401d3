import React from 'react';
import { connect } from 'react-redux';

const Status = props => {
    // figure out my leader on the level of my component 
    // I will do it by using the candidates votes I have in my store
    let currentLeader = {name: 'No Leader', votes: 0, disabled: false};
    let leader = props.candidates.reduce((winning, record)=> {
        let r = record.votes > winning.votes ? record : winning;
        return r;
    }, currentLeader);
    
    return (
        <section className="status">
            <span>Current Leader: {leader.name}</span>
            <span>Votes: {props.votes.totalVotes} </span>
        </section>
    )
}

// we don't have any action in this component so I am not using "mapDispatchToProps" for actions
const mapStateToProps = state => ({
    votes: state.votes,
    candidates: state.candidates
})

// export the connect of the component
export default connect(mapStateToProps)(Status)