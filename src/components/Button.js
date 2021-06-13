import React from 'react';
import '../assets/scss/component.scss';

function Button({ type = '', onClick = () => {}, name = '' }) {
    return (
        <button className={`button ${type}`} onClick={onClick}>
            {name}
        </button>
    );
}

export default Button;
