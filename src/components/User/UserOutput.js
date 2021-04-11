import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p> My Username is  {props.username}</p>
            <p>The Username mentioned above is having Admin access</p>
        </div>
    );
};

export default userOutput;