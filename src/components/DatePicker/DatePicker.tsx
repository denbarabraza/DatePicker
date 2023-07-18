import React, { useState } from 'react';

import { IDatePicker } from '@/components/DatePicker/interface';
import { DatePickerCalendar } from '@/components/DatePickerCalendar';
import { DatePickerSelector } from '@/components/DatePickerSelector';
import { DisplayYearMonths } from '@/components/DisplayMonths/DisplayYearMonths';

import { DatePickerBlock } from './styled';

export const DatePicker: React.FC<IDatePicker> = ({ selectedDate, onChange }) => {
  const [shownDate, setShownDate] = useState(selectedDate?.clone());
  const [showMonthYear, setShowMonthYear] = useState(false);

  return (
    <DatePickerBlock>
      <DatePickerSelector
        shownDate={shownDate}
        setShownDate={setShownDate}
        showMonthYear={showMonthYear}
        setShowMonthYear={setShowMonthYear}
      />
      <DatePickerCalendar
        selectedDate={selectedDate}
        shownDate={shownDate}
        onChange={onChange}
      />
    </DatePickerBlock>
  );
};
