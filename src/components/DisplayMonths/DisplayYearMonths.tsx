import React, { FC } from 'react';
import { Dayjs } from 'dayjs';

import { CustomSelect } from '@/components/CustomSelect';
import { SelectEnum } from '@/components/CustomSelect/interface';

import { Wrapper } from './styled';

interface IDisplayYearMonths {
  shownDate: Dayjs;
  onChangeDate: React.Dispatch<React.SetStateAction<Dayjs>>;
  setShowMonthYear: (value: boolean) => void;
}

export const DisplayYearMonths: FC<IDisplayYearMonths> = ({
  shownDate,
  onChangeDate,
  setShowMonthYear,
}) => {
  const handleMonthSelect = (month: number) => {
    onChangeDate(shownDate?.month(month));
    setShowMonthYear(false);
  };

  const handleYearSelect = (year: number) => {
    onChangeDate(shownDate?.year(year));
  };

  return (
    <Wrapper>
      <CustomSelect
        type={SelectEnum.Year}
        selectedValue={shownDate?.year()}
        onSelect={handleYearSelect}
      />
      <CustomSelect
        type={SelectEnum.Month}
        selectedValue={shownDate?.month()}
        onSelect={handleMonthSelect}
      />
    </Wrapper>
  );
};
