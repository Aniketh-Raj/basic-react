import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Rahul', age: 27 },
      { name: 'Samir', age: 28 }
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: 'Rahul RAJ R', age: 27 },
        { name: newName, age: 28 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Rahul RAJ R', age: 27 },
        { name: event.target.value, age: 28 }
      ]
    })
  }

  render() {

    const buttonStyle = {
      backgroundColor : 'white',
      font : 'inherit',
      border : '2px solid blue',
      padding : '10px',
      cursor : 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi, I am Aniketh</h1>
        <button 
        style = {buttonStyle}
        onClick={() => this.switchNameHandler('Old Samir')}
        >Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age} 
        click={this.switchNameHandler.bind(this,'Samir Kanta Lenka')}
        nameChanged={this.nameChangedHandler}
        >My Hobbies : Coding</Person>
      </div>
    );
  }
}

export default App;
