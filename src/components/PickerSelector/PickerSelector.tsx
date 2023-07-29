import React, { memo, useCallback } from 'react';

import { ChevronDownIcon } from '@/assets/ChevronDownIcon';
import { IDatePickerSelectorProps } from '@/components/PickerSelector/interface';
import { changeDateMonth } from '@/utils/utils';

import {
  LeftSelectorIcon,
  RightSelectorIcon,
  SelectorDateItem,
  SelectorItem,
} from './styled';

export const PickerSelector: React.FC<IDatePickerSelectorProps> = memo(
  ({ shownDate, onChangeDate, setShowMonthYear }) => {
    const handleIconClick = useCallback(
      (isNextMonth: boolean) => {
        return () => {
          onChangeDate(changeDateMonth(shownDate, isNextMonth));
        };
      },
      [onChangeDate, shownDate],
    );

    return (
      <SelectorItem data-testid='selectorItem'>
        <LeftSelectorIcon onClick={handleIconClick(false)}>
          <ChevronDownIcon />
        </LeftSelectorIcon>
        <SelectorDateItem onClick={setShowMonthYear} data-cy='dateInSelector'>
          {shownDate?.format('MMMM YYYY')}
        </SelectorDateItem>
        <RightSelectorIcon onClick={handleIconClick(true)} data-cy='nextIcon'>
          <ChevronDownIcon />
        </RightSelectorIcon>
      </SelectorItem>
    );
  },
);
