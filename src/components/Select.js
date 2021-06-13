import React from 'react';
import '../assets/scss/component.scss';

const Select = ({
    title = 'Select',
    className = '',
    options = [],
    value = '',
    onChange = () => {},
}) => {
    return (
        <label className="base custom">
            <span className="base__title">{title}</span>
            <select
                className="custom__select"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            >
                {options.map((item) => (
                    <option key={item.value} value={item.value}>
                        {item.label}
                    </option>
                ))}
            </select>
        </label>
    );
};

export default Select;
