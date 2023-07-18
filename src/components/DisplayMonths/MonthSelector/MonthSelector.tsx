import React from 'react';

import { SelectorDropdown, SelectorDropdownItem } from '../styled';

interface IMonthSelectorProps {
  selectedMonth?: number;
  onSelect: (month: number) => void;
}

export const MonthSelector: React.FC<IMonthSelectorProps> = ({
  selectedMonth,
  onSelect,
}) => {
  const handleSelect = (month: number) => {
    onSelect(month);
  };

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return (
    <SelectorDropdown>
      {months.map((month, index) => (
        <SelectorDropdownItem
          key={month}
          selected={selectedMonth === index}
          onClick={() => handleSelect(index)}
        >
          {month}
        </SelectorDropdownItem>
      ))}
    </SelectorDropdown>
  );
};
