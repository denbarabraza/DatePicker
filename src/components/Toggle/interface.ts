import { WeekendStatusEnum } from '@/constants/enums';

export interface IStatusWeekendsToggle {
  statusWeekends: WeekendStatusEnum;
  setStatusWeekends: (status: WeekendStatusEnum) => void;
}
