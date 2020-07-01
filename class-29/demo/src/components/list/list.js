import React from 'react';
import ReactDOM from 'react-dom';

import './list.scss';

class List extends React.Component {
    render() {
        return (
            <ul className="list">
                {this.props.children}
            </ul>
        )
    }
}

export default List;