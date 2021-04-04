import React from 'react';

const userInput = (props) => {
    return (
        <div className="UserInput">
            <input type="text" onChange={props.userNameChanged} value={props.username}></input>
        </div>
    );
};

export default userInput;