import React from 'react';

const People = (props) => {
    
    return (
        <div>
            <div>Count: {props.count}</div>
            <ul>
                {
                    Object.keys(props.people).map((key, idx) => {
                        return (
                            <li key={idx}>
                                <a href={props.people[key]}>
                                    {key}
                                </a>
                            </li>
                        )
                    })
                }
                
            </ul>
        </div>
    )
}

export default People;
