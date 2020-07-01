import React from 'react';

const People = (props) => {

  // TODO for the lab: add loading-true class in styles.scss,
  // no need to add loading-false class.
  return (
    <div className={`loading-${props.loading}`}>
      <ul>
        {Object.keys(props.people).map((key, idx) => {
          return (
            <li key={idx}>
              <a href={props.people[key]}>{key}</a>
            </li>
          );
        })}
      </ul>
    </div>
  )

}

export default People;