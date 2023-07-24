import { Dayjs } from 'dayjs';

export interface ICalendarCell {
  text: string;
  value: Dayjs;
  isCurrentMonth?: boolean;
  isWeekend: boolean;
  isToday?: boolean;
  isHoliday?: boolean;
  holidayName?: string;
}
