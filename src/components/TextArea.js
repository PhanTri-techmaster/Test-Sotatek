import React from 'react';
import '../assets/scss/component.scss';

const TextArea = ({
    title = 'TextArea',
    className = '',
    type = 'text',
    value = '',
    onChange = () => {},
    defaultValue = '',
    placeholder = 'TextArea text ...',
    disabled = false,
    readOnly = false,
}) => {
    return (
        <label className="base custom">
            <span className="base__title">{title}</span>
            <textarea
                className={`custom__textarea ${className}`}
                type={type}
                defaultValue={defaultValue}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                disabled={disabled}
                readOnly={readOnly}
            ></textarea>
        </label>
    );
};

export default TextArea;
