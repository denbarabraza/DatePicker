import { Dayjs } from 'dayjs';

import { WeekendStatusEnum } from '@/constants/enums';
import {
  IHolidaysResponse,
  IRangeDateObj,
  ITaskInCalendar,
} from '@/pickers/DatePicker/interfaces';

export interface IPickerCalendar {
  shownDate: Dayjs;
  selectedDate: Dayjs;
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
