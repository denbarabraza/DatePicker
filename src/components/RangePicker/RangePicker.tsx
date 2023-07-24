import React, { FC } from 'react';

import { DatePickerCalendar } from '@/components/DatePickerCalendar';
import { DatePickerSelector } from '@/components/DatePickerSelector';
import { DisplayYearMonths } from '@/components/DisplayMonths';
import { IRangePicker } from '@/components/RangePicker/interface';
import { GlobalStylePicker } from '@/decorators/components/GlobalStylePicker';
import InputFilterPicker from '@/decorators/components/InputFilterPicker';
import { usePickerControl } from '@/hooks/usePickerControl';

export const RangePicker: FC<IRangePicker> = ({
  selectedDate,
  onChangeDate,
  onChangeRange,
}) => {
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
    setRangeDays,
  } = usePickerControl({ selectedDate, onChangeRange });

  return (
    <GlobalStylePicker>
      <InputFilterPicker
        datePicker={false}
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
          shownDate={selectedDate}
          startOfWeek={startOfWeek}
          setStartOfWeek={setNumberStartOfWeek}
          holidays={holidays}
          statusWeekends={statusWeekends}
          rangeDays={rangeDays}
          setRangeDays={setRangeDays}
        />
      </InputFilterPicker>
    </GlobalStylePicker>
  );
};
