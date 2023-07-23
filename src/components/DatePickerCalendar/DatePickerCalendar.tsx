import React, { useEffect, useMemo, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';

import { CustomInput } from '@/components/CustomInput';
import { InputEnum } from '@/components/CustomInput/interface';
import { IDatePickerCalendarProps } from '@/components/DatePickerCalendar/interface';
import { WeekendStatusEnum } from '@/components/Toggle/types';
import { FormatEnum } from '@/constants/formatDate';
import { getCalendarRows, getDayOfWeek } from '@/utils/utils';

import {
  CalendarBlock,
  CalendarCell,
  CalendarHeader,
  CalendarRow,
  CircleMarker,
  CircleTaskMarker,
  DayCell,
  Task,
  TaskList,
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
  setTasksDate,
  tasksDate,
  rangeDays,
  setRangeDays,
}) => {
  const [holiday, setHoliday] = useState<null | string>(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showTaskControl, setShowTaskControl] = useState(false);
  const [taskValue, setTaskValue] = useState('');

  const dateKey = selectedDate.format(FormatEnum.YearMonthDayFormat);

  const handleMouseEnter = (tooltip: string | undefined) => () => {
    if (tooltip) {
      setHoliday(tooltip);
      setShowTooltip(true);
    }
  };

  const handleMouseLeave = () => {
    setHoliday(null);
    setShowTooltip(false);
  };

  const isInRange = (date: Dayjs, startDate: string, endDate: string) => {
    return date.isAfter(startDate, 'day') && date.isBefore(endDate, 'day');
  };
  const handleSelectDate = (value: Dayjs) => () => {
    if (onChangeDate) {
      setShowTaskControl(true);
      onChangeDate(value);
    }

    if (setRangeDays) {
      const getDayFormat = (day: Dayjs) => {
        return dayjs(day).format(FormatEnum.YearMonthDayFormat);
      };

      const dateFormat = getDayFormat(value);

      if (!rangeDays?.from && !rangeDays?.to.length) {
        setRangeDays({ from: dateFormat, to: '' });
      }
      if (!rangeDays?.to && rangeDays?.from) {
        handleChangeState(rangeDays?.from, dateFormat);
      } else if (!rangeDays?.to.length && rangeDays?.from) {
        handleChangeState(rangeDays?.from, dateFormat);
      } else if (rangeDays?.from && rangeDays?.to) {
        setRangeDays({ from: dateFormat, to: '' });
      }
    }
  };

  const handleChangeState = (from: string, to: string) => {
    if (setRangeDays) {
      if (dayjs(from).isBefore(to)) {
        setRangeDays({
          from,
          to,
        });
      } else {
        setRangeDays({
          from: to,
          to: from,
        });
      }
    }
  };

  const getEndDateForClasses = () => {
    if (rangeDays) {
      if (rangeDays.to) return rangeDays.to;

      return rangeDays.from;
    }

    return '';
  };

  const changeStartWeekDay = (value: string) => () => {
    setStartOfWeek(value);
  };

  const setTaskInCalendar = () => {
    const tasksForDate = tasksDate[dateKey] || [];

    if (taskValue) {
      const updatedTasks = { ...tasksDate, [dateKey]: [...tasksForDate, taskValue] };

      setTasksDate(updatedTasks);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }
  };

  const rows = useMemo(() => {
    return getCalendarRows(
      shownDate,
      startOfWeek,
      holidays?.response.holidays,
      statusWeekends,
    );
  }, [shownDate, startOfWeek, holidays, statusWeekends]);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');

    if (storedTasks) {
      setTasksDate(JSON.parse(storedTasks));
    }
  }, [setTasksDate]);

  return (
    <CalendarBlock>
      <CalendarHeader>
        {rows[0].map(({ value }, i) => (
          <CalendarCell
            key={i}
            isStartOfWeek={startOfWeek === getDayOfWeek(value.format(FormatEnum.Day))}
            onClick={changeStartWeekDay(value.format(FormatEnum.Day))}
          >
            {value.format(FormatEnum.Day)}
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
              const dateKey = value.format(FormatEnum.YearMonthDayFormat);
              const tasksForDate = tasksDate[dateKey] || [];
              const isStartDate =
                rangeDays &&
                dateKey ===
                  (dayjs(rangeDays.from).isBefore(getEndDateForClasses())
                    ? rangeDays.from
                    : rangeDays.to);
              const isEndDate =
                rangeDays &&
                dateKey ===
                  (dayjs(rangeDays.from).isBefore(getEndDateForClasses())
                    ? rangeDays.to
                    : rangeDays.from);
              const isDateInRange = rangeDays
                ? isInRange(value, rangeDays?.from, getEndDateForClasses())
                : false;

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
                  isStartDate={isStartDate}
                  isEndDate={isEndDate}
                  isInRange={isDateInRange}
                >
                  {text}
                  {tasksForDate.length > 0 && <CircleTaskMarker />}
                </DayCell>
              );
            },
          )}
        </CalendarRow>
      ))}
      {showTooltip && (
        <TooltipBlock>
          <CircleMarker />
          <TooltipItem>{holiday}</TooltipItem>
        </TooltipBlock>
      )}
      {tasksDate[dateKey] && (
        <TaskList>
          {tasksDate[dateKey].map(task => {
            return <Task key={`${task}-${dateKey}`}>{task}</Task>;
          })}
        </TaskList>
      )}
      {showTaskControl && (
        <CustomInput
          type={InputEnum.Task}
          taskValue={taskValue}
          setTaskValue={setTaskValue}
          setTaskInCalendar={setTaskInCalendar}
          placeholder='Task for the selected date'
        />
      )}
    </CalendarBlock>
  );
};
