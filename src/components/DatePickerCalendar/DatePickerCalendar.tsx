import React, { useEffect, useMemo, useState } from 'react';
import { Dayjs } from 'dayjs';

import { CustomInput } from '@/components/CustomInput';
import { InputEnum } from '@/components/CustomInput/interface';
import { IDatePickerCalendarProps } from '@/components/DatePickerCalendar/interface';
import { WeekendStatusEnum } from '@/components/Toggle/types';
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
}) => {
  const [holiday, setHoliday] = useState<null | string>(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showTaskControl, setShowTaskControl] = useState(false);
  const [taskValue, setTaskValue] = useState('');

  const dateKey = selectedDate.format('YYYY-MM-DD');

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

  const handleSelectDate = (value: Dayjs) => () => {
    setShowTaskControl(true);

    onChangeDate(value);
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
            isStartOfWeek={startOfWeek === getDayOfWeek(value.format('dd'))}
            onClick={changeStartWeekDay(value.format('dd'))}
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
              const dateKey = value.format('YYYY-MM-DD');
              const tasksForDate = tasksDate[dateKey] || [];

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
          placeholder='Create a task for the selected date'
        />
      )}
    </CalendarBlock>
  );
};
