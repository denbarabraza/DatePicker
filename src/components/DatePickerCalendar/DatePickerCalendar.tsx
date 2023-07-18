import React, { useEffect, useMemo, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';

import { IDatePickerCalendarProps } from '@/components/DatePickerCalendar/interface';
import { getCalendarRows } from '@/utils/utils';

import { CalendarCell, CalendarHeader, CalendarRow, DayCell } from './styled';

export const DatePickerCalendar: React.FC<IDatePickerCalendarProps> = ({
  shownDate,
  selectedDate,
  onChange,
}) => {
  const [startOfWeek, setStartOfWeek] = useState<number>(1);

  const handleSelectDate = (value: Dayjs) => {
    return () => onChange(value);
  };

  const rows = useMemo(() => {
    return getCalendarRows(shownDate, startOfWeek);
  }, [shownDate]);

  return (
    <>
      <CalendarHeader>
        {rows[0].map(({ value }, i) => (
          <CalendarCell key={i}>{value.format('dd')}</CalendarCell>
        ))}
      </CalendarHeader>

      {rows.map((cells, rowIndex) => (
        <CalendarRow key={rowIndex}>
          {cells.map(({ text, value, isCurrentMonth }, i) => (
            <DayCell
              key={`${text} - ${i}`}
              isActive={value.toString() === selectedDate?.toString()}
              isCurrentMonth={isCurrentMonth || false}
              onClick={handleSelectDate(value)}
            >
              {text}
            </DayCell>
          ))}
        </CalendarRow>
      ))}
    </>
  );
};
