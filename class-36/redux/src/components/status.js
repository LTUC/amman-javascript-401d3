import React from 'react';
import { connect } from 'react-redux';

const Status = props => {
    return (
        <section className="status">
            Total : {props.totalVotes}
        </section>
    );
}

// we only care about the totalVotes to be displayed
const mapStateToProps = state => ({
    totalVotes: state.counter.totalVotes
});

// connecting my component with the mapState to props to be able to use the store.
export default connect(mapStateToProps)(Status);

