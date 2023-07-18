import React, { useState } from 'react';

import { ChevronDownIcon } from '@/assets/ChevronDownIcon';
import { IDatePickerSelectorProps } from '@/components/DatePickerSelector/interface';
import { DisplayYearMonths } from '@/components/DisplayMonths/DisplayYearMonths';
import { changeDateMonth } from '@/utils/utils';

import {
  LeftSelectorIcon,
  RightSelectorIcon,
  SelectorDateItem,
  SelectorItem,
} from './styled';

export const DatePickerSelector: React.FC<IDatePickerSelectorProps> = ({
  shownDate,
  setShownDate,
  setShowMonthYear,
  showMonthYear,
}) => {
  const handleIconClick = (isNextMonth: boolean) => {
    return () => {
      setShownDate(changeDateMonth(shownDate, isNextMonth));
    };
  };

  return (
    <SelectorItem>
      <LeftSelectorIcon onClick={handleIconClick(false)}>
        <ChevronDownIcon />
      </LeftSelectorIcon>
      {showMonthYear ? (
        <DisplayYearMonths
          shownDate={shownDate}
          setShownDate={setShownDate}
          setShowMonthYear={setShowMonthYear}
        />
      ) : (
        <SelectorDateItem onClick={() => setShowMonthYear(true)}>
          {shownDate?.format('MMMM YYYY')}
        </SelectorDateItem>
      )}

      <RightSelectorIcon onClick={handleIconClick(true)}>
        <ChevronDownIcon />
      </RightSelectorIcon>
    </SelectorItem>
  );
};
