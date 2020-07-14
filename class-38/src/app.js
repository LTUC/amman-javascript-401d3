import React from 'react';

import { connect, dispatch } from 'react-redux';

import * as actions from './store/actions.js'


const App = props => {

    const fetchData = (e) => {
        e && e.preventDefault(); // if I have a form
        props.get();
    }

    // useEffect(()=> {
    //     fetchData()
    // }, []);


    return (
        <>
            <button onClick={fetchData}>Get data</button>
            {props.data.results.map((record, idx) => {
                return <div key={idx}>
                    {record.name}
                </div>
            })}
        </>
    )
}


const mapStateToProps = state => ({
    data: state.data
});

const mapDispatchToProps = (dispatch, getState) => ({
    get: ()=> dispatch(actions.getRemoteData()),
    put: (id, data) => dispatch(actions.putRemoteData(id, data))
});

// export component after the connect
export default connect(mapStateToProps, mapDispatchToProps)(App);
