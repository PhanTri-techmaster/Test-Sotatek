import React from 'react';
import { ListGroupItemHeading } from 'reactstrap';
import '../assets/scss/component.scss';

const Input = ({
    className = '',
    type = 'text',
    value = '',
    defaultValue = '',
    onChange = () => {},
    placeholder = 'Input text ...',
    disabled = false,
    readOnly = false,
}) => {
    return (
        <div className="base custom">
            <input
                className={`custom__input ${className}`}
                type={type}
                defaultValue={defaultValue}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                disabled={disabled}
                readOnly={readOnly}
            />
        </div>
    );
};

export default Input;
