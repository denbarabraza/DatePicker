import React, { useMemo, useState } from 'react';
import { Dayjs } from 'dayjs';

import { IDatePickerCalendarProps } from '@/components/DatePickerCalendar/interface';
import { WeekendStatusEnum } from '@/components/Toggle/types';
import { getCalendarRows, getDayOfWeek } from '@/utils/utils';

import {
  CalendarCell,
  CalendarHeader,
  CalendarRow,
  CircleMarker,
  DayCell,
  TooltipBlock,
  TooltipItem,
} from './styled';

export const DatePickerCalendar: React.FC<IDatePickerCalendarProps> = ({
  shownDate,
  selectedDate,
  onChangeDate,
  startOfWeek,
  setStartOfWeek,
  holidays,
  statusWeekends,
}) => {
  const [tooltip, setTooltip] = useState<null | string>(null);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = (tooltip: string | undefined) => () => {
    if (tooltip) {
      setTooltip(tooltip);
      setShowTooltip(true);
    }
  };

  function handleMouseLeave() {
    setTooltip(null);
    setShowTooltip(false);
  }

  const handleSelectDate = (value: Dayjs) => {
    return () => onChangeDate(value);
  };

  const rows = useMemo(() => {
    return getCalendarRows(
      shownDate,
      startOfWeek,
      holidays?.response.holidays,
      statusWeekends,
    );
  }, [shownDate, startOfWeek, holidays, statusWeekends]);

  const onClickCell = (value: string) => () => {
    setStartOfWeek(value);
  };

  return (
    <>
      <CalendarHeader>
        {rows[0].map(({ value }, i) => (
          <CalendarCell
            key={i}
            isStartOfWeek={startOfWeek === getDayOfWeek(value.format('dd'))}
            onClick={onClickCell(value.format('dd'))}
          >
            {value.format('dd')}
          </CalendarCell>
        ))}
      </CalendarHeader>

      {rows.map((cells, rowIndex) => (
        <CalendarRow
          key={rowIndex}
          withWeekends={statusWeekends === WeekendStatusEnum.WithWeekEnds}
        >
          {cells.map(
            ({
              text,
              value,
              isCurrentMonth,
              isWeekend,
              isToday,
              isHoliday,
              holidayName,
            }) => {
              return (
                <DayCell
                  key={`${text} - ${value}`}
                  isActive={value.toString() === selectedDate?.toString()}
                  isCurrentMonth={isCurrentMonth || false}
                  isWeekend={isWeekend || false}
                  isToday={isToday || false}
                  isHoliday={isHoliday || false}
                  onClick={handleSelectDate(value)}
                  onMouseEnter={handleMouseEnter(holidayName)}
                  onMouseLeave={handleMouseLeave}
                >
                  {text}
                </DayCell>
              );
            },
          )}
        </CalendarRow>
      ))}
      {showTooltip && (
        <TooltipBlock>
          <CircleMarker />
          <TooltipItem>{tooltip}</TooltipItem>
        </TooltipBlock>
      )}
    </>
  );
};
