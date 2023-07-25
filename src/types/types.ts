import { Dispatch, SetStateAction } from 'react';
import { Dayjs } from 'dayjs';

import {
  IHolidaysResponse,
  IRangeDateObj,
  ITaskInCalendar,
} from '@/components/DatePicker/types';
import { WeekendStatusEnum } from '@/components/Toggle/types';

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
  changeStartWeekDay: (value: string) => () => void;
  onClearRangeDays: () => void;
  getEndDateForClasses: () => string;
  handleSelectDate: (value: Dayjs) => () => void;
  isInRange: (date: Dayjs, startDate: string, endDate: string) => boolean;
}
