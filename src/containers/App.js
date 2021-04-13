import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props) {
    super(props)
    console.log('[App.js] constructor method was called');
  }

  state = {
    persons: [
      { id: '1', name: 'Rahul', age: 27 },
      { id: '2', name: 'Samir', age: 28 },
      { id: '3', name: 'Terminator', age: 201 }
    ],
    user: [
      { username: 'Admin' }
    ],
    showUsers: false,
    inputCharlength: 0,
    inputCharString:''
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps method was called', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount method is')
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

    const personObj = { ...this.state.persons[personIndex] }

    personObj.name = event.target.value;

    const personsArray = [...this.state.persons];
    personsArray[personIndex] = personObj;

    this.setState({
      persons: personsArray
    })
  }

  deleteInputCharHandler = (inputCharIndex) => {

    const toDeleteCharArray = [...this.state.inputCharString.split('')]

    toDeleteCharArray.splice(inputCharIndex, 1)

    const updatedInputCharString = toDeleteCharArray.join('');
    this.setState({
      inputCharString: updatedInputCharString
    })
  }

  togglePersonUsers = () => {
    const isShowUsers = this.state.showUsers;
    this.setState({
      showUsers: !isShowUsers
    })
  }

  getInputCharLength = (event) => {
    let charLength = event.target.value.length;
    this.setState({
      inputCharlength: charLength,
      inputCharString: event.target.value
    })
  }

  render() {

    console.log('[App.js] render method was called');

    let persons = null;

    if (this.state.showUsers) {
      persons = (
        <div>
          <Persons
            persons = {this.state.persons}
            clicked = {this.deletePersonHandler}
            changed = {this.nameChangedHandler}
          ></Persons>
        </div>
      );
    }

    return (
      <div className="App">
        
        <Cockpit 
          showUsers = {this.state.showUsers}
          persons = {this.state.persons}
          togglePersonUsers = {this.togglePersonUsers}
          appTitle = {this.props.appTitle}
        />

        {persons}

      </div>
    );
  }
}

export default App;
