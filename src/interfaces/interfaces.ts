import { Dispatch, SetStateAction } from 'react';
import { Dayjs } from 'dayjs';

import { WeekendStatusEnum } from '@/constants/enums';
import {
  IHolidaysResponse,
  IRangeDateObj,
  ITaskInCalendar,
} from '@/pickers/DatePicker/interfaces';

export interface ICalendarCell {
  text: string;
  value: Dayjs;
  isCurrentMonth?: boolean;
  isWeekend: boolean;
  isToday?: boolean;
  isHoliday?: boolean;
  holidayName?: string;
}

export interface IUsePickerControl {
  onClickShowFilter: () => void;
  rangeDays: IRangeDateObj;
  setFromDate: (date: Dayjs) => void;
  setToDate: (date: Dayjs) => void;
  showFilter: boolean;
  statusWeekends: WeekendStatusEnum;
  setStatusWeekends: (status: WeekendStatusEnum) => void;
  setTasksDate: (value: ITaskInCalendar) => void;
  onClickShowMonthYear: () => void;
  showMonthYear: boolean;
  setShowMonthYear: Dispatch<SetStateAction<boolean>>;
  startOfWeek: number;
  setStartOfWeek: Dispatch<SetStateAction<number>>;
  setNumberStartOfWeek: (dayValue: string) => void;
  holidays: IHolidaysResponse | undefined | null;
  tasksDate?: ITaskInCalendar;
  setRangeDays?: (date: IRangeDateObj) => void;
}

export interface IUsePickerControlProps {
  selectedDate: Dayjs;
  onChangeRange?: (date: IRangeDateObj) => void;
}

export interface IUsePickerCalendarControl {
  rows: Array<ICalendarCell[]>;
  rangeNoEmpty: string | undefined;
  holiday: null | string;
  taskValue: string;
  showTooltip: boolean;
  showTaskControl: boolean;
  handleMouseEnter: (tooltip: string | undefined) => () => void;
  handleMouseLeave: () => void;
  setTaskInCalendar: () => void;
  setTaskValue: (task: string) => void;
  removeTaskFromCalendar: (task: string) => () => void;
  changeStartWeekDay: (value: string) => () => void;
  onClearRangeDays: () => void;
  isStartDate: (
    rangeDays: IRangeDateObj | undefined,
    dateKey: string,
    endDate: string,
  ) => boolean;
  isEndDate: (
    rangeDays: IRangeDateObj | undefined,
    dateKey: string,
    endDate: string,
  ) => boolean;
  getEndDateForClasses: (rangeDays: IRangeDateObj | undefined) => string;
  handleSelectDate: (value: Dayjs) => () => void;
  isInRange: (date: Dayjs, startDate: string, endDate: string) => boolean;
}
