import { Dayjs } from 'dayjs';

export interface IDatePickerSelectorProps {
  shownDate: Dayjs;
  onChangeDate: (date: Dayjs) => void;
  setShowMonthYear: () => void;
}
