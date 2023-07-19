import React, { useEffect, useState } from 'react';

import { CustomInput } from '@/components/CustomInput';
import { IDatePicker } from '@/components/DatePicker/interface';
import { DatePickerCalendar } from '@/components/DatePickerCalendar';
import { DatePickerSelector } from '@/components/DatePickerSelector';
import { DisplayYearMonths } from '@/components/DisplayMonths/DisplayYearMonths';

import { DatePickerBlock, GlobalStyle } from './styled';

export const DatePicker: React.FC<IDatePicker> = ({ selectedDate, onChangeDate }) => {
  const [showMonthYear, setShowMonthYear] = useState(false);

  const onClickShowMonthYear = () => {
    setShowMonthYear(prev => !prev);
  };

  return (
    <DatePickerBlock>
      <GlobalStyle />
      <CustomInput
        date={selectedDate}
        onChooseDate={onChangeDate}
        placeholder='Choose Date (yyyy-mm-dd)'
      />
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
      />
    </DatePickerBlock>
  );
};
