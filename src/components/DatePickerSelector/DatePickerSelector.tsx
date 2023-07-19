import React from 'react';

import { ChevronDownIcon } from '@/assets/ChevronDownIcon';
import { IDatePickerSelectorProps } from '@/components/DatePickerSelector/interface';
import { changeDateMonth } from '@/utils/utils';

import {
  LeftSelectorIcon,
  RightSelectorIcon,
  SelectorDateItem,
  SelectorItem,
} from './styled';

export const DatePickerSelector: React.FC<IDatePickerSelectorProps> = ({
  shownDate,
  onChangeDate,
  setShowMonthYear,
}) => {
  const handleIconClick = (isNextMonth: boolean) => {
    return () => {
      onChangeDate(changeDateMonth(shownDate, isNextMonth));
    };
  };

  return (
    <SelectorItem>
      <LeftSelectorIcon onClick={handleIconClick(false)}>
        <ChevronDownIcon />
      </LeftSelectorIcon>
      <SelectorDateItem onClick={setShowMonthYear}>
        {shownDate?.format('MMMM YYYY')}
      </SelectorDateItem>
      <RightSelectorIcon onClick={handleIconClick(true)}>
        <ChevronDownIcon />
      </RightSelectorIcon>
    </SelectorItem>
  );
};
