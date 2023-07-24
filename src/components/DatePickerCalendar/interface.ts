import { Dayjs } from 'dayjs';

import {
  IHolidaysResponse,
  IRangeDateObj,
  ITaskInCalendar,
} from '@/components/DatePicker/types';
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
  rangeDays?: IRangeDateObj;
  setRangeDays?: (data: IRangeDateObj) => void;
}
