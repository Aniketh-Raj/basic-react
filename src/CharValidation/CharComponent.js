import React from 'react';
import './CharComponent.css';

const charComponent = (props) => {
    return (
        <div className="CharComponent">
            <p>{props.charSymbol}</p>
        </div>
    );
};

export default charComponent;