import { ITaskInCalendar } from '@/components/DatePicker/types';
import { WeekendStatusEnum } from '@/components/Toggle/types';

export interface IDisplayFilter {
  statusWeekends: WeekendStatusEnum;
  setStatusWeekends: (status: WeekendStatusEnum) => void;
  setTasksDate: (value: ITaskInCalendar) => void;
}
