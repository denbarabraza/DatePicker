import { WeekendStatusEnum } from '@/constants/enums';
import { ITaskInCalendar } from '@/pickers/DatePicker/interfaces';

export interface IDisplayFilter {
  statusWeekends: WeekendStatusEnum;
  setStatusWeekends: (status: WeekendStatusEnum) => void;
  setTasksDate: (value: ITaskInCalendar) => void;
}
