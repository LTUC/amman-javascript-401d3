import React, { useState } from 'react';

// no render or return of JSX

// Custom Hook
// this is a reusable form hook
// it is meant to capture values from any set of fields
// this allows us to take that object and handle it any way we want in a component

const useForm = (callback) => {
    const [values, setValues ] = useState({});

    const handleSubmit = event => {
        if (event) event.preventDefault();
        callback(values);
        console.log("_submit_ values: ", values);
    }

    const handleChange = event => {
        event.persist(); // this is a way to exit a simulated event and in order to capture the value
        // set values of our state
        // update values with all prev values and the new value form the event
        event.persist();
        console.log("values : ",values)
        setValues(values => ({ ...values, [event.target.name]: event.target.value }));
       
       console.log('__change__values: ', values);
    }

    // this is just another way of creating our onChange and onSubmit
    // for adding more methods for input (repackaged)
    const handleInput = {
        onChange: event =>{
            event.persist();
            setValues(values => ({ ...values, [event.target.name]: event.target.value }));
        },
        onSubmit: event => {
            if (event) event.preventDefault();
            callback(values);
            console.log("_submit_ values: ", values);
        }
    }

    return [handleSubmit, handleChange, handleInput, values];
}

export default useForm;