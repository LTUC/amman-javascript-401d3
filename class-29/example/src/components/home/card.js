import React from 'react';

const Card = (props) => (
  <div>
    <h3>{props.person.name}</h3>
    <ul>
      {props.person.starships.map((ship, i) => {
        return <li key={i}>{ship}</li>
      })}
    </ul>
  </div>
)

export default Card;
