import React, { useEffect, useMemo, useState } from 'react';
import { Dayjs } from 'dayjs';

import { IDatePickerCalendarProps } from '@/components/DatePickerCalendar/interface';
import { getCalendarRows } from '@/utils/utils';

import { CalendarCell, CalendarHeader, CalendarRow, DayCell } from './styled';

export const DatePickerCalendar: React.FC<IDatePickerCalendarProps> = ({
  shownDate,
  selectedDate,
  onChangeDate,
}) => {
  const [startOfWeek, setStartOfWeek] = useState<number>(1);

  const handleSelectDate = (value: Dayjs) => {
    return () => onChangeDate(value);
  };

  const rows = useMemo(() => {
    return getCalendarRows(shownDate, startOfWeek);
  }, [shownDate]);

  useEffect(() => {}, [selectedDate]);

  return (
    <>
      <CalendarHeader>
        {rows[0].map(({ value }, i) => (
          <CalendarCell key={i}>{value.format('dd')}</CalendarCell>
        ))}
      </CalendarHeader>

      {rows.map((cells, rowIndex) => (
        <CalendarRow key={rowIndex}>
          {cells.map(({ text, value, isCurrentMonth, isWeekend, isToday }, i) => {
            return (
              <DayCell
                key={`${text} - ${i}`}
                isActive={value.toString() === selectedDate?.toString()}
                isCurrentMonth={isCurrentMonth || false}
                isWeekend={isWeekend || false}
                isToday={isToday || false}
                onClick={handleSelectDate(value)}
              >
                {text}
              </DayCell>
            );
          })}
        </CalendarRow>
      ))}
    </>
  );
};
