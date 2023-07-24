import { Dayjs } from 'dayjs';

import {
  IHolidaysResponse,
  IObj,
  ITaskInCalendar,
} from '@/components/DatePicker/interfaces';
import { WeekendStatusEnum } from '@/components/Toggle/types';

export interface IDatePickerCalendar {
  shownDate: Dayjs;
  selectedDate?: Dayjs;
  onChangeDate?: (date: Dayjs) => void;
  startOfWeek: number;
  setStartOfWeek: (startOfWeek: string) => void;
  holidays: IHolidaysResponse | undefined | null;
  statusWeekends: WeekendStatusEnum;
  setTasksDate?: (value: ITaskInCalendar) => void;
  tasksDate?: ITaskInCalendar;
  rangeDays?: IObj;
  setRangeDays?: (data: IObj) => void;
}
