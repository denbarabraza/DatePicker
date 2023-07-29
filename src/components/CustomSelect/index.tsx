import React, { FC, useState } from 'react';

import { ICustomSelect } from '@/components/CustomSelect/interface';
import { SelectEnum } from '@/constants/enums';
import { months } from '@/constants/monts';
import { range } from '@/utils/utils';

import { ArrowIcon, Container, Option, OptionsContainer, SelectedOption } from './styled';

export const CustomSelect: FC<ICustomSelect> = ({ selectedValue, onSelect, type }) => {
  const [isMonthOpen, setIsMonthOpen] = useState(false);
  const [isYearOpen, setIsYearOpen] = useState(false);
  const typeRule = type === SelectEnum.Month;
  const isOpenSelect = typeRule ? isMonthOpen : isYearOpen;

  const handleSelectM = (month: number) => () => {
    onSelect(month);
  };

  const selectValue = typeRule ? months[selectedValue] : selectedValue;

  const handleSelectY = (year: number) => () => {
    onSelect(year);
  };

  const years = range(1995, 2050);

  const onClickOpenSelect = () => {
    if (typeRule) {
      setIsMonthOpen(prev => !prev);
    } else {
      setIsYearOpen(prev => !prev);
    }
  };

  return (
    <Container>
      <SelectedOption onClick={onClickOpenSelect}>
        {selectValue}
        <ArrowIcon open={isOpenSelect} />
      </SelectedOption>
      <OptionsContainer open={isOpenSelect}>
        {typeRule
          ? months.map((month, index) => (
              <Option key={month} onClick={handleSelectM(index)}>
                {month}
              </Option>
            ))
          : years.map(year => (
              <Option
                key={year}
                selected={selectedValue === year}
                onClick={handleSelectY(year)}
              >
                {year}
              </Option>
            ))}
      </OptionsContainer>
    </Container>
  );
};
