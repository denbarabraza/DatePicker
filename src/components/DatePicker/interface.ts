import { Dayjs } from 'dayjs';

export interface IDatePicker {
  selectedDate: Dayjs;
  onChange: (newDate: Dayjs) => void;
}
