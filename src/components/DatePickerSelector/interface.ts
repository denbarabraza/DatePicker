import React from 'react';
import { Dayjs } from 'dayjs';

export interface IDatePickerSelectorProps {
  shownDate: Dayjs;
  onChangeDate: React.Dispatch<React.SetStateAction<Dayjs>>;
  setShowMonthYear: () => void;
}
