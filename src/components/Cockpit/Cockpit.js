import React from 'react';
import './Cockpit.css';
import classes from './Cockpit.css';

const cockpit = (props) => {

    const cssClasses = [];

    let buttonStyle = '';

    if(props.showUsers) {
        buttonStyle = classes.Red;
    }

    if(props.persons.length <=2) {
      cssClasses.push('red');
    }
    
    if(props.persons.length <= 1) {
      cssClasses.push('bold');
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.appTitle}</h1>
            <p className={cssClasses.join(' ')} >This working Amazing..!!</p>
            <button 
                className={buttonStyle}
                onClick={props.togglePersonUsers}
            >Toggle Users</button>
        </div>
    );
}

export default cockpit;