import { Dayjs } from 'dayjs';

export interface IDisplayYearMonths {
  shownDate: Dayjs;
  onChangeDate: (date: Dayjs) => void;
  setShowMonthYear: (value: boolean) => void;
}
