import React from 'react';
import './Person.css';
import classes from './Person.css';

const person = (props) => {
    console.log('[Person.js] is rendering...')
    return (
            <div className={classes.Person}>
            <input type="text" onChange={props.nameChanged} value={props.name}></input>
            <p onClick = {props.click}>I am {props.name} and I am {props.age} years old</p>
        </div>
    );
};

export default person;