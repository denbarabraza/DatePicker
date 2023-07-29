import React, { FC } from 'react';

import { DisplayYearMonths } from '@/components/DisplayMonths';
import { PickerCalendar } from '@/components/PickerCalendar';
import { PickerSelector } from '@/components/PickerSelector';
import { GlobalStylePicker } from '@/decorators/components/GlobalStylePicker';
import InputFilterPicker from '@/decorators/components/InputFilterPicker';
import { usePickerControl } from '@/hooks/usePickerControl';
import { IRangePicker } from '@/pickers/RangePicker/interface';

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
