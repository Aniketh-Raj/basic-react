import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';


class App extends Component {

  state = {
    persons: [
      { id : '1', name: 'Rahul', age: 27 },
      { id : '2', name: 'Samir', age: 28 },
      { id : '3', name: 'Terminator', age: 201 }
    ],
    user: [
      { username: 'Admin' }
    ],
    showUsers: false
  }

  userNameChangedHandler = (event) => {
    this.setState({
      user: [
        { username: event.target.value }
      ]
    })
  }

  deletePersonHandler = (personIndex) => {

    // const persons = this.state.persons;
    const personsArray = [...this.state.persons];

    personsArray.splice(personIndex, 1);
    this.setState({
      persons: personsArray
    })

  }

  nameChangedHandler = (event, personId) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === personId;
    })

    const personObj = {...this.state.persons[personIndex]}

    personObj.name = event.target.value;

    const personsArray = [...this.state.persons];
    personsArray[personIndex] = personObj;

    this.setState({
      persons : personsArray
    })
  }

  togglePersonUsers = () => {
    const isShowUsers = this.state.showUsers;
    this.setState({
      showUsers: !isShowUsers
    })
  }

  render() {

    let persons = null;

    if (this.state.showUsers) {
      persons = (
        <div>
          {
            this.state.persons.map( (person,index) => {
              return <Person 
              click={() => this.deletePersonHandler(index)}
              name = {person.name} 
              age = {person.age}
              key = {person.id}
              nameChanged = {(event) => this.nameChangedHandler(event,person.id)} 
              ></Person>
            })
          }
        </div>
      );
    }

    const buttonStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '2px solid blue',
      padding: '10px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi, I am Aniketh</h1>
        <button
          style={buttonStyle}
          onClick={this.togglePersonUsers}
        >Toggle Users</button>
        {persons}
        <UserInput
          username={this.state.user[0].username}
          userNameChanged={this.userNameChangedHandler}
        ></UserInput>
        <UserOutput username={this.state.user[0].username}></UserOutput>
        <UserOutput username={this.state.user[0].username}></UserOutput>
        <UserOutput username='Jim Halpert'></UserOutput>
      </div>
    );
  }
}

export default App;
