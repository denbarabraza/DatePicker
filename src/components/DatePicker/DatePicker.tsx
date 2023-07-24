import React, { memo } from 'react';

import { IDatePicker } from '@/components/DatePicker/interfaces';
import { DatePickerCalendar } from '@/components/DatePickerCalendar';
import { DatePickerSelector } from '@/components/DatePickerSelector';
import { DisplayYearMonths } from '@/components/DisplayMonths/DisplayYearMonths';
import { GlobalStylePicker } from '@/decorators/components/GlobalStylePicker';
import InputFilterPicker from '@/decorators/components/InputFilterPicker';
import { usePickerControl } from '@/hooks/usePickerControl';

export const DatePicker: React.FC<IDatePicker> = memo(
  ({ selectedDate, onChangeDate }) => {
    const {
      onClickShowFilter,
      rangeDays,
      setFromDate,
      setToDate,
      showFilter,
      statusWeekends,
      setStatusWeekends,
      setTasksDate,
      onClickShowMonthYear,
      showMonthYear,
      setShowMonthYear,
      startOfWeek,
      setNumberStartOfWeek,
      holidays,
      tasksDate,
    } = usePickerControl({ selectedDate });

    return (
      <GlobalStylePicker>
        <InputFilterPicker
          datePicker
          date={selectedDate}
          onChooseDate={onChangeDate}
          onClickShowFilter={onClickShowFilter}
          rangeDays={rangeDays}
          setFromDate={setFromDate}
          setToDate={setToDate}
          showFilter={showFilter}
          statusWeekends={statusWeekends}
          setStatusWeekends={setStatusWeekends}
          setTasksDate={setTasksDate}
        >
          <DatePickerSelector
            shownDate={selectedDate}
            onChangeDate={onChangeDate}
            setShowMonthYear={onClickShowMonthYear}
          />
          {showMonthYear && (
            <DisplayYearMonths
              shownDate={selectedDate}
              onChangeDate={onChangeDate}
              setShowMonthYear={setShowMonthYear}
            />
          )}
          <DatePickerCalendar
            selectedDate={selectedDate}
            shownDate={selectedDate}
            onChangeDate={onChangeDate}
            startOfWeek={startOfWeek}
            setStartOfWeek={setNumberStartOfWeek}
            holidays={holidays}
            statusWeekends={statusWeekends}
            setTasksDate={setTasksDate}
            tasksDate={tasksDate}
          />
        </InputFilterPicker>
      </GlobalStylePicker>
    );
  },
);
