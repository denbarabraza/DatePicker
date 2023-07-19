import { Dayjs } from 'dayjs';

export interface IDatePickerCalendarProps {
  shownDate: Dayjs;
  selectedDate: Dayjs;
  onChangeDate: (newDate: Dayjs) => void;
}
