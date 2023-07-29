import { Dayjs } from 'dayjs';

import { IRangeDateObj } from '@/pickers/DatePicker/interfaces';

export interface IRangePicker {
  selectedDate: Dayjs;
  onChangeDate: (date: Dayjs) => void;
  onChangeRange: (date: IRangeDateObj) => void;
}
