import React from 'react';

import Votes from './components/vote-counter';
import Status from './components/status';

import './style.scss';

export default props => {
    return (
        <>
            <Status />
            <Votes />
        </>
    )
}