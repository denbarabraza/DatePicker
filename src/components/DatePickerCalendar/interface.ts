import React from 'react';
import { Dayjs } from 'dayjs';

import { IHolidaysResponse } from '@/components/DatePicker/interface';
import { WeekendStatusEnum } from '@/components/Toggle/types';

export interface IDatePickerCalendarProps {
  shownDate: Dayjs;
  selectedDate: Dayjs;
  onChangeDate: (date: Dayjs) => void;
  startOfWeek: number;
  setStartOfWeek: (startOfWeek: string) => void;
  holidays: IHolidaysResponse | undefined | null;
  statusWeekends: WeekendStatusEnum;
}
