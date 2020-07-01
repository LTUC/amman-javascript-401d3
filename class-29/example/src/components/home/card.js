import React from 'react';

const Card = (props) => (
  <div>
    <h3>{props.person.name}</h3>
    <ul>
      {props.person.starships.map(ship => {
        return <li>{ship}</li>
      })}
    </ul>
  </div>
)

export default Card;
