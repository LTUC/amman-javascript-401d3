import React, { useState } from 'react';
import useForm from '../../hooks/form.js';

import './_food.scss';

function Food(props) {
    
    // add one state called formData
    const [formData, setformData] = useState({});
    const [handleSubmit, handleChange, handleInput, values] = useForm(eat);

    function eat(food) {
        console.log("@@@@@@@@@food >>>> ",food)
        setformData(food);
    }


    return (
        <main>
            <section className="wrapper">
                <h1>Food Form</h1>
                <form onSubmit={handleSubmit}>
                    <input name="name" type="text" placeholder="enter food name" onChange={handleChange}/>
                    <input name="calories" type="text" placeholder="enter calories" onChange={handleChange} />
                    <button>consume food!</button>
                </form>
            </section>
            <section className="wrapper">
                <h2>Form Values after submission</h2>
                   {
                    Object.keys(values).map((key, idx)=>{
                        return <p key={idx}>{key}: {values[key]} </p>
                    })
                }
            </section>
            <section className="wrapper">
                <h2>component Values after submission</h2>
                   {
                    Object.keys(formData).map((key, idx)=>{
                        return <p key={idx}>{key}: {formData[key]} </p>
                    })
                }
            </section>
        </main>
    )
}

export default Food;