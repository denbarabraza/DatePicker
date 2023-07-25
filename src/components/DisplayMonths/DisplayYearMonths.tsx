import React, { FC, memo } from 'react';

import { CustomSelect } from '@/components/CustomSelect';
import { SelectEnum } from '@/components/CustomSelect/interface';

import { IDisplayYearMonths } from './interface';
import { Wrapper } from './styled';

export const DisplayYearMonths: FC<IDisplayYearMonths> = memo(
  ({ shownDate, onChangeDate, setShowMonthYear }) => {
    const handleMonthSelect = (month: number) => {
      onChangeDate(shownDate?.month(month));
      setShowMonthYear(false);
    };

    const handleYearSelect = (year: number) => {
      onChangeDate(shownDate?.year(year));
    };

    return (
      <Wrapper data-cy='blockYearMonth'>
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
  },
);
