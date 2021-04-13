import React from 'react';
import './Person.css';
import styled from 'styled-components';

const StyledComps = styled.div`
    width: 30%;
    margin: 20px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width : 500px) {
        width: 450px
    }
`;

const person = (props) => {
    console.log('[Person.js] is rendering...')
    return (
        <StyledComps>
            <div className="Person">
            <input type="text" onChange={props.nameChanged} value={props.name}></input>
            <p onClick = {props.click}>I am {props.name} and I am {props.age} years old</p>
        </div>
        </StyledComps>
    );
};

export default person;