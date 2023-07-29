import React, { memo } from 'react';

import { RemoveTaskIcon } from '@/assets/RemoveTaskIcon';
import { CustomInput } from '@/components/CustomInput';
import { IPickerCalendar } from '@/components/PickerCalendar/interface';
import { InputEnum, WeekendStatusEnum } from '@/constants/enums';
import { FormatEnum } from '@/constants/formatDate';
import { usePickerCalendarControl } from '@/hooks/usePickerCalendarControl';
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
  RemoveIcon,
  Task,
  TaskList,
  TooltipBlock,
  TooltipItem,
} from './styled';

export const PickerCalendar: React.FC<IPickerCalendar> = memo(
  ({
    shownDate,
    selectedDate,
    onChangeDate,
    setStartOfWeek,
    holidays,
    statusWeekends,
    setTasksDate,
    tasksDate,
    rangeDays,
    setRangeDays,
    startOfWeek,
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
      removeTaskFromCalendar,
      isStartDate,
      isEndDate,
    } = usePickerCalendarControl({
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
      <CalendarBlock data-testid='calendarItem'>
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
                const endDate = getEndDateForClasses(rangeDays);
                const isStartDateValue = isStartDate(rangeDays, dateKey, endDate);
                const isEndDateValue = isEndDate(rangeDays, dateKey, endDate);
                const isDateInRange = rangeDays
                  ? isInRange(value, rangeDays?.from, getEndDateForClasses(rangeDays))
                  : false;

                return (
                  <DayCell
                    data-testid='dayCell'
                    key={`${text} - ${value}`}
                    isActive={value.toString() === selectedDate?.toString()}
                    isCurrentMonth={isCurrentMonth || false}
                    isWeekend={isWeekend || false}
                    isToday={isToday || false}
                    isHoliday={isHoliday || false}
                    onClick={handleSelectDate(value)}
                    onMouseEnter={handleMouseEnter(holidayName)}
                    onMouseLeave={handleMouseLeave}
                    isStartDate={isStartDateValue}
                    isEndDate={isEndDateValue}
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
          <TaskList data-testid='taskList'>
            {tasksDate[dateKey].map(task => {
              return (
                <Task key={`${task}-${dateKey}`}>
                  {task}
                  <RemoveIcon onClick={removeTaskFromCalendar(task)}>
                    <RemoveTaskIcon />
                  </RemoveIcon>
                </Task>
              );
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
        {rangeNoEmpty && (
          <ClearRangeBlock>
            <ClearRangeItem onClick={onClearRangeDays}>Clear the range</ClearRangeItem>
          </ClearRangeBlock>
        )}
      </CalendarBlock>
    );
  },
);
