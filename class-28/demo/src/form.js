import React from 'react';

class Form extends React.Component {
    // method to be called onSubmit
    handleSubmit = async e => {
        // fetch data form API 
        e.preventDefault();

        let raw = await fetch('https://swapi.dev/api/people/'); // star wars API
        let data = await raw.json();

        let count = data.count;
        console.log("data.results : ",data.results)
        let people = data.results.reduce((list, person)=> {
            list[person.name] = person.url;
            return list;
        }, {});

        // call props and it will send data to parent
        this.props.handler(count, people);

    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <button>{this.props.custom}</button>
            </form>
        );
    }

}

export default Form;