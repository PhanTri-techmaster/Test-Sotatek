import React, { useState } from 'react';
import '../assets/scss/component.scss';
import DatePicker from 'react-datepicker';
import svgDatePicker from '../assets/icons/calendar.svg';

const DatePickerCustom = ({
    title = 'DatePicker',
    className = '',
    selected,
    onChange = () => {},
    placeholderText = 'Choose date...',
}) => {
    const [startDate, setStartDate] = useState(selected);
    return (
        <label className="base custom">
            <span className="base__title">{title}</span>
            <div className="custom__datepicker">
                <DatePicker
                    className="custom__datepicker--input"
                    selected={startDate}
                    onChange={(date) => {
                        setStartDate(date);
                        onChange(date);
                    }}
                    dateFormat="dd/MM/yyyy"
                    minDate={new Date()}
                    placeholderText={placeholderText}
                />
                <img
                    className="custom__datepicker--icon"
                    width={24}
                    src={svgDatePicker}
                    alt=""
                />
            </div>
        </label>
    );
};

export default DatePickerCustom;
