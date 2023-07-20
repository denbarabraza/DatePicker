export interface IStatusWeekendsToggle {
  statusWeekends: WeekendStatusEnum;
  setStatusWeekends: (status: WeekendStatusEnum) => void;
}

export enum WeekendStatusEnum {
  WithWeekEnds = 'with',
  WithoutWeekEnds = 'without',
}
