import { Dayjs } from 'dayjs';

export interface IDatePickerCalendarProps {
  shownDate: Dayjs;
  selectedDate: Dayjs;
  onChange: (newDate: Dayjs) => void;
}
