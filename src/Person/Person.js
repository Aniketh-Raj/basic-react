import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <input type="text" onChange={props.nameChanged} value={props.name}></input>
            <p onClick = {props.click}>I am {props.name} and I am {props.age} years old</p>
        </div>
    );
};

export default person;