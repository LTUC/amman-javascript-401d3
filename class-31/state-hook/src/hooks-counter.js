// import React from 'react';
// import { useState } from 'react';
import React, { useState } from 'react';

// this is a function component, there is no class here
// there is no need to setup the intial state in a constructor

function HooksCounter() {
    //destructuring with arrays
    // we are doing hooks with this syntax:
    // [stateVar, methodToUpdateVar] = useState(initial value of state)
    let [clicks, setClicks] = useState(0);
    const [factorOfFive, setfactorOfFive] = useState(false);

    const updateCounters = () => {
        // we dont use "this" as : this.state.clicks
        let updated = clicks + 1;
        // we don't use this.setState()
        setClicks(updated);
        setfactorOfFive(updated > 0 && updated % 5 === 0); // true or false 
    };
    // we dont have "render" method
    return (
        <section>
            <p>Button has been clicked {clicks} times </p>
            <p>Factor of five: {factorOfFive.toString()}</p>
            <button onClick={updateCounters}>increment Counter</button>
        </section>
    )
}



export default HooksCounter;