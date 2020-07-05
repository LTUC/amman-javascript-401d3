import React, { useState, useEffect } from 'react';

function People(props) {

    const [people, setPeople] = useState([]);
    const [name, setName] = useState('');

    const _changeName = (e) => {
        setName(e.target.value);
    }

    const _addPerson = (e) => {
        e.preventDefault();
        e.target.reset();
        // short circuit
        name && setPeople([...people, name]);
    }

    // this will run on every re-render of this component
    useEffect(()=> {
        console.log("%c I run on EVERY render and re-render", "color: blue");
    });

    // this runs only on name changes
    useEffect(()=> {
        console.log(`%c Name Changed: ${name}`, "color: red");
    }, [name]);

    // this only runs on people changes when the form is submitted
    useEffect(()=> {
        console.log(`%c Person Added: ${people}`, "color: rosybrown" );
    }, [people]);

    // this runs on people or name changes
    useEffect(()=> {
        console.log(`%c Any of these two name/people???`, "color: green" );
    }, [name, people]);


    // this runs only on the initial rendering
    useEffect(()=> {
        console.log("%c Initial Mount", "color: purple" );
    }, []);

    return (
        <div>
            <form onSubmit={_addPerson}>
                <input onChange={_changeName} />
            </form>
            {
                people.map((person, idx) => {
                    return <p key={idx}>{person}</p>
                })
            }
        </div>
    )

    

}

export default People;