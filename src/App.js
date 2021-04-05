import React, { Component } from 'react';
import './App.css';
import CharComponent from './CharValidation/CharComponent';
import ValidationComp from './CharValidation/Validation';
import Person from './Person/Person';
import styled from 'styled-components';


const StyledButton = styled.button`

  background-color: ${props => props.alt ? 'red' : 'green'};
  margin: 10px;
  color: white;
  font: inherit;
  border: 2px solid blue;
  padding: 10px;
  cursor: pointer;

  &:hover  {
    background-color : ${props => props.alt ? 'blue' : 'lightGreen'};
    color: yelllow;
  }
`;

class App extends Component {

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

    let persons = null;

    const buttonStyle = {
      backgroundColor: 'green',
      margin: '10px',
      color: 'white',
      font: 'inherit',
      border: '2px solid blue',
      padding: '10px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor : 'lightGreen',
        color: 'yelllow',
      }
    }

    if (this.state.showUsers) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                nameChanged={(event) => this.nameChangedHandler(event, person.id)}
              ></Person>
            })
          }
        </div>
      );

      buttonStyle.backgroundColor = 'red';
      buttonStyle[':hover'] =  {
        backgroundColor : 'pink',
        color: 'blue',
      }
    }

    let charCompJsx = null;
    
    let inputCharStringLength = this.state.inputCharlength;
    let inputCharStringText = this.state.inputCharString;

    let inputCharArray = inputCharStringText.split('');

    if(inputCharStringLength > 0) {
      charCompJsx = (
        <div>
          {
            inputCharArray.map((inputChar,index) => {
              return <CharComponent
                click={() => this.deleteInputCharHandler(index)}
                charSymbol = {inputChar}
                key = {index}
              ></CharComponent>
            })
          }
        </div>
      );
    }

    let charMessageJsx = null;

    if (this.state.inputCharlength < 5) {
      
      charMessageJsx = (
      <div>
        <ValidationComp
          inputCharlength={this.state.inputCharlength}
          message='The character length is too small, Please enter greater than 5 chars'
        ></ValidationComp>
      </div>
      );
    } else if (this.state.inputCharlength > 10) {

      charMessageJsx = (
        <div>
          <ValidationComp
            inputCharlength={this.state.inputCharlength}
            message='The character length is too Big, Please enter lesser than 10 chars'
          ></ValidationComp>
        </div>
        );
    } else {
      charMessageJsx = (
        <div>
          <ValidationComp
            inputCharlength={this.state.inputCharlength}
            message='The character length is perfect now'
          ></ValidationComp>
        </div>
        );
    }

    const cssClasses = [];

    if(this.state.persons.length <=2) {
      cssClasses.push('red');
    }
    
    if(this.state.persons.length <= 1) {
      cssClasses.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi, I am Aniketh</h1>
        <p className={cssClasses.join(' ')} >This working Amazing..!!</p>
        <StyledButton
          onClick={this.togglePersonUsers}
          alt= {this.state.showUsers}
        >Toggle Users</StyledButton>

        {persons}

        <input type="text" onChange={this.getInputCharLength}></input>
        <p>The Input string length is {this.state.inputCharlength}</p>

        {charMessageJsx}

        {charCompJsx}

        {/* <UserInput
          username={this.state.user[0].username}
          userNameChanged={this.userNameChangedHandler}
        ></UserInput>
        <UserOutput username={this.state.user[0].username}></UserOutput>
        <UserOutput username={this.state.user[0].username}></UserOutput>
        <UserOutput username='Jim Halpert'></UserOutput> */}
      </div>
    );
  }
}

export default App;
