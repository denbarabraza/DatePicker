import React from 'react';
import { Dayjs } from 'dayjs';

export interface IDatePicker {
  selectedDate: Dayjs;
  onChangeDate: React.Dispatch<React.SetStateAction<Dayjs>>;
}
