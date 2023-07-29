import React, { memo } from 'react';

import { DisplayYearMonths } from '@/components/DisplayMonths/DisplayYearMonths';
import { PickerCalendar } from '@/components/PickerCalendar';
import { PickerSelector } from '@/components/PickerSelector';
import { GlobalStylePicker } from '@/decorators/components/GlobalStylePicker';
import InputFilterPicker from '@/decorators/components/InputFilterPicker';
import { usePickerControl } from '@/hooks/usePickerControl';
import { IDatePicker } from '@/pickers/DatePicker/interfaces';

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
          <PickerSelector
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
          <PickerCalendar
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
