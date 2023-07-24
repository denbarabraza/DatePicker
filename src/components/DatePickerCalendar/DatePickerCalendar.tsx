import React, { memo } from 'react';
import dayjs from 'dayjs';

import { CustomInput } from '@/components/CustomInput';
import { InputEnum } from '@/components/CustomInput/interface';
import { IDatePickerCalendar } from '@/components/DatePickerCalendar/interface';
import { WeekendStatusEnum } from '@/components/Toggle/types';
import { FormatEnum } from '@/constants/formatDate';
import { usePickerControl } from '@/hooks/usePickerCalendarControl';
import { getDayOfWeek } from '@/utils/utils';

import {
  CalendarBlock,
  CalendarCell,
  CalendarHeader,
  CalendarRow,
  CircleMarker,
  CircleTaskMarker,
  ClearRangeBlock,
  ClearRangeItem,
  DayCell,
  Task,
  TaskList,
  TooltipBlock,
  TooltipItem,
} from './styled';

export const DatePickerCalendar: React.FC<IDatePickerCalendar> = memo(
  ({
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
    const {
      rows,
      rangeNoEmpty,
      holiday,
      taskValue,
      showTooltip,
      showTaskControl,
      handleMouseEnter,
      handleMouseLeave,
      setTaskInCalendar,
      setTaskValue,
      changeStartWeekDay,
      onClearRangeDays,
      getEndDateForClasses,
      handleSelectDate,
      isInRange,
    } = usePickerControl({
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
    });

    const dateKey = selectedDate?.format(FormatEnum.YearMonthDayFormat);

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
                const tasksForDate = tasksDate ? tasksDate[dateKey] || [] : [];
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
        {tasksDate && dateKey && tasksDate[dateKey] && (
          <TaskList>
            {tasksDate[dateKey].map(task => {
              return <Task key={`${task}-${dateKey}`}>{task}</Task>;
            })}
          </TaskList>
        )}
        {tasksDate && showTaskControl && (
          <CustomInput
            type={InputEnum.Task}
            taskValue={taskValue}
            setTaskValue={setTaskValue}
            setTaskInCalendar={setTaskInCalendar}
            placeholder='Task for the selected date'
          />
        )}
        {rangeDays && rangeNoEmpty && (
          <ClearRangeBlock>
            <ClearRangeItem onClick={onClearRangeDays}>Clear the range</ClearRangeItem>
          </ClearRangeBlock>
        )}
      </CalendarBlock>
    );
  },
);
