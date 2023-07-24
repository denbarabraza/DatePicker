import { ReactNode } from 'react';
import { Dayjs } from 'dayjs';

import { IRangeDateObj } from '@/components/DatePicker/types';
import { IDisplayFilter } from '@/components/DisplayFilter';

export interface IDecInputFilter extends IDisplayFilter {
  datePicker: boolean;
  date: false | Dayjs;
  onChooseDate: (date: Dayjs) => void;
  onClickShowFilter: () => void;
  rangeDays: IRangeDateObj;
  setFromDate: (date: Dayjs) => void;
  setToDate: (date: Dayjs) => void;
  children: ReactNode;
  showFilter: boolean;
}

export interface IGlobalStyle {
  children: ReactNode;
}
