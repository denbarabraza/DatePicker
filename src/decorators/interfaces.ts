import { ReactNode } from 'react';
import { Dayjs } from 'dayjs';

import { IDisplayFilter } from '@/components/DisplayFilter/interface';
import { IRangeDateObj } from '@/pickers/DatePicker/interfaces';

export interface IDecInputFilter extends IDisplayFilter {
  datePicker: boolean;
  date: Dayjs;
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
