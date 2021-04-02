import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I am Aniketh</h1>
        <Person name='Rahul' age='27'/>
        <Person name='Samir' age='28'>My Hobbies : Coding</Person>
      </div>
    );
  }
}

export default App;
