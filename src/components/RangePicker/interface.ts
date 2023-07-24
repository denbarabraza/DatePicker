import { Dayjs } from 'dayjs';

import { IObj } from '@/components/DatePicker/interfaces';

export interface IRangePicker {
  selectedDate: Dayjs;
  onChangeDate: (date: Dayjs) => void;
  onChangeRange: (date: IObj) => void;
}
