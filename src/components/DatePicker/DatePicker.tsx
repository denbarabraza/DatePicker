import React, { useState } from 'react';
import styled from 'styled-components';

import Calendar from '@/components/Calendar/Calendar';

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 8px 16px;
  font-size: 16px;
  line-height: 1.5;
  color: #333;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  transition:
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;

  &:focus {
    outline: none;
    border-color: #66afe9;
    box-shadow:
      inset 0 1px 1px rgba(0, 0, 0, 0.075),
      0 0 8px rgba(102, 175, 233, 0.6);
  }
`;

export interface IDatePicker {
  selectedDate?: Date;
  onChange: (date: Date) => void;
}

export const DatePicker: React.FC<IDatePicker> = ({ selectedDate, onChange }) => {
  const [showCalendar, setShowCalendar] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const dateString = event.target.value;
    const date = new Date(dateString);

    if (!Number.isNaN(date.getTime())) {
      onChange(date);
    }
  };

  const handleCalendarChange = (date: Date) => {
    onChange(date);
    setShowCalendar(false);
  };

  return (
    <div>
      <Input
        type='text'
        value={selectedDate?.toLocaleDateString() ?? ''}
        onChange={handleInputChange}
        onFocus={() => setShowCalendar(true)}
      />
      {showCalendar && (
        <Calendar
          initialView='month'
          selectedDate={selectedDate}
          onChange={handleCalendarChange}
        />
      )}
    </div>
  );
};

export default DatePicker;
