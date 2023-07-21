import { Dayjs } from 'dayjs';

import { IHolidaysResponse, ITaskInCalendar } from '@/components/DatePicker/interface';
import { WeekendStatusEnum } from '@/components/Toggle/types';

export interface IDatePickerCalendarProps {
  shownDate: Dayjs;
  selectedDate: Dayjs;
  onChangeDate: (date: Dayjs) => void;
  startOfWeek: number;
  setStartOfWeek: (startOfWeek: string) => void;
  holidays: IHolidaysResponse | undefined | null;
  statusWeekends: WeekendStatusEnum;
  setTasksDate: (value: ITaskInCalendar) => void;
  tasksDate: ITaskInCalendar;
}
