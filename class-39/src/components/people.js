import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { add, remove, get } from '../store/people.store';

const People = props => {
    // we will add more stuff

    // inital load get the API data
    useEffect(()=> {
        props.get();
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        props.add(e.target.person.value);
    }
   
    return (
        <section>
            <ul>
                {props.people.map((person, idx)=> {
                    return <li onClick={()=> props.remove(person.name)} key={idx}>{person.name}</li>
                })}
            </ul>

            <form onSubmit={handleSubmit}>
                <input name="person" />
                <button>Click to Submit</button>
            </form>
        </section>
    )
}

// const mapStateToProps : map it the store
const mapStateToProps = state =>({
    people: state.people
})
// const mapDispatchToProps
const mapDispatchToProps = { add, remove, get};

export default connect(mapStateToProps, mapDispatchToProps)(People);