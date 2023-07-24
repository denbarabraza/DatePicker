import { Dayjs } from 'dayjs';

import { IRangeDateObj } from '@/components/DatePicker/types';

export interface IRangePicker {
  selectedDate: Dayjs;
  onChangeDate: (date: Dayjs) => void;
  onChangeRange: (date: IRangeDateObj) => void;
}
