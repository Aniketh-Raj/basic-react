import React from 'react';
import Person from './Person/Person';

const persons = (props) => {
  console.log('[Person.js] rendering... being processed')
  return props.persons.map((person, index) => {
    return <Person
      click={() => props.clicked(index)}
      name={person.name}
      age={person.age}
      key={person.id}
      nameChanged={(event) => props.changed(event, person.id)}
    ></Person>
  })
}



export default persons;