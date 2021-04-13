import React, { Component } from 'react';
import './Person.css';
import classes from './Person.css';

class Person extends Component {

    render() {
        console.log('[Person.js] is rendering...')
        return (
            <div className={classes.Person}>
                <input type="text" onChange={this.props.nameChanged} value={this.props.name}></input>
                <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} years old</p>
            </div>
        );
    }
};

export default Person;