import React, { useState } from 'react';
import styled from 'styled-components';

import CalendarHeader from '@/components/CalendarHeader/CalendarHeader';

type Props = {
  initialView: 'week' | 'month' | 'year';
  selectedDate?: Date;
  onChange: (date: Date) => void;
};

const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

const Weekdays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
  margin-bottom: 8px;
`;

const Weekday = styled.div`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
`;

const Days = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
`;

const Day = styled.div<{ isSelected?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  font-size: 14px;
  font-weight: ${({ isSelected }) => (isSelected ? 'bold' : 'normal')};
  text-align: center;
  background-color: ${({ isSelected }) => (isSelected ? '#66afe9' : 'transparent')};
  color: ${({ isSelected }) => (isSelected ? '#fff' : 'inherit')};
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${({ isSelected }) => (isSelected ? '#66afe9' : '#f5f5f5')};
  }
`;

const Calendar: React.FC<Props> = ({ initialView, selectedDate, onChange }) => {
  const [view, setView] = useState(initialView);

  const handlePrev = () => {
    // обработчик для кнопки "Prev"
  };

  const handleNext = () => {
    // обработчик для кнопки "Next"
  };

  const handleDayClick = (date: Date) => {
    onChange(date);
  };

  const renderWeekdays = () => {
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return (
      <Weekdays>
        {weekdays.map(weekday => (
          <Weekday key={weekday}>{weekday}</Weekday>
        ))}
      </Weekdays>
    );
  };

  const renderDays = () => {
    let currentDate = new Date();

    if (selectedDate) {
      currentDate = new Date(selectedDate);
    }
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const startDay = new Date(year, month, 1).getDay() || 7; // 1 = Monday, 7 = Sunday
    const days: Date[] = [];

    // Add previous month's days
    for (let i = startDay - 2; i >= 0; i--) {
      const date = new Date(year, month, -i);

      days.unshift(date);
    }

    // Add current month's days
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i);

      days.push(date);
    }

    // Add next month's days
    const endDay = new Date(year, month, daysInMonth).getDay() || 7; // 1 = Monday, 7 = Sunday

    for (let i = 1; i <= 7 - endDay; i++) {
      const date = new Date(year, month + 1, i);

      days.push(date);
    }

    return (
      <Days>
        {days.map(date => (
          <Day
            key={date.toISOString()}
            onClick={() => handleDayClick(date)}
            isSelected={
              selectedDate && date.toDateString() === selectedDate.toDateString()
            }
          >
            {date.getDate()}
          </Day>
        ))}
      </Days>
    );
  };

  return (
    <CalendarWrapper>
      <CalendarHeader view={view} onPrev={handlePrev} onNext={handleNext} />
      {view === 'month' && renderWeekdays()}
      {renderDays()}
    </CalendarWrapper>
  );
};

export default Calendar;
