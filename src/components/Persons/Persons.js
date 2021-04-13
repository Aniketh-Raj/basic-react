import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] shouldComponentUpdate method called..')
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate method called..')
    return {message:'test Message'};
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate method called..')
    console.log(snapshot)
  }

  render() {
    console.log('[Person.js] rendering... being processed')
    return this.props.persons.map((person, index) => {
      return <Person
        click={() => this.props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        nameChanged={(event) => this.props.changed(event, person.id)}
      ></Person>
    })
  }
}



export default Persons; 